/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/AxiosHooks/useAxiosPublic";
import { GiRunningNinja } from "react-icons/gi";

const DashboardC = () => {
    const { user } = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const axios = useAxiosPublic();
    const [firebaseUsers, setFirebaseUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/getPayments'); // This seems to fetch user list?
                if (response.status === 200) {
                    setFirebaseUsers(response.data);
                    setAllUsers(response.data);
                }
                setLoading(false);
                setError(null);
            } catch (error) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, [axios]);

    // Fetch messages for the selected conversation with polling
    useEffect(() => {
        let pollingInterval;

        if (selectedConversation) {
            const fetchMessages = async () => {
                try {
                    const res = await axios.get(`/api/messages/${selectedConversation.conversationId}`);
                    if (res.status === 200) {
                        setMessages(res.data);
                    }
                } catch (error) {
                    console.error("Error fetching conversation:", error.message || error);
                }
            };

            pollingInterval = setInterval(fetchMessages, 3000);

            return () => clearInterval(pollingInterval);
        }
    }, [selectedConversation, axios]);

    const handleMessages = async (conversationId) => {
        try {
            const selectedConv = conversations.find(conv => conv.conversationId === conversationId);
            setSelectedConversation(selectedConv);

            const res = await axios.get(`/api/messages/${conversationId}`);
            if (res.status === 200) {
                setMessages(res.data);
            }
        } catch (error) {
            console.error("Error fetching conversation:", error.message || error);
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!selectedConversation) return;

        try {
            const response = await axios.post(`/api/messages`, {
                conversationId: selectedConversation.conversationId,
                senderId: user.uid, // `user.uid` is used based on your Auth context
                message: messageInput,
            });

            if (response.status === 201) {
                setMessageInput('');
                handleMessages(selectedConversation.conversationId);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleUserClick = async (selectedUserId) => {
        try {
            const selectedUserProfile = allUsers.find(user => user._id === selectedUserId);
            setSelectedUser(selectedUserProfile);

            const fetchConversations = async () => {
                try {
                    if (selectedUserId) {
                        const response = await axios.get(`/api/conversation/${selectedUserId}`);
                        if (response.status === 200) {
                            setConversations(response.data);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching conversations:", error);
                }
            };

            // Create new conversation if it doesn't exist
            const response = await axios.post('/api/conversation', {
                userId: user.uid,  // Current user's ID
                receiverId: selectedUserId, // Selected user’s ID
            });

            if (response.status === 201) {
                const newConversation = response.data;
                setConversations(prev => [...prev, newConversation]);
                handleMessages(newConversation.conversationId); // Automatically select and fetch messages for the new conversation
            }

            fetchConversations();
        } catch (error) {
            console.error("Error handling user click:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex w-full items-center justify-center pt-20">
                <GiRunningNinja className="text-[2.8rem] animate-bounce h-16  w-16 md:h-36  md:w-36 text-green-500" />
            </div>
        );
    }

    if (error) return <div>{error}</div>;

    return (
        <div className="w-full grid grid-cols-4">

            {/* Left Sidebar - Conversations */}
            <div className="w-full col-span-1  bg-indigo-50 border lg:h-screen">
                <div className="flex justify-center items-center p-8">
                    <img
                        src="https://i.ibb.co/kqSnnFn/download-1.jpg"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <div className="ml-4">
                        <h1 className="text-lg md:text-2xl font-semibold">{user?.displayName || "User"}</h1>
                        <h1 className="text-sm md:text-lg font-medium">{user?.email}</h1>
                    </div>
                </div>
                <hr />
                <div className="p-4 md:p-8">
                    <div className="text-lg text-green-500 font-semibold">Messages</div>
                    <div className="h-[400px] md:h-auto overflow-y-auto">
                        {conversations.length > 0 ? (
                            conversations.map(({ conversationId, userName, email },index) => (
                                <div
                                    key={conversationId}
                                    className="flex items-center my-6 md:my-8 cursor-pointer"
                                    onClick={() => handleMessages(conversationId)}
                                >
                                    <img
                                        src={'https://i.ibb.co/kqSnnFn/download-1.jpg'}
                                        alt="Conversation Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-4">
                                        <h1 className="text-lg font-semibold">{userName || `User${index}`}</h1>
                                        <h1 className="text-sm font-medium">{email}</h1>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-xl font-semibold p-5">No Conversations Available</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Middle Section - Messages */}
            <div className="w-full col-span-2  bg-white border h-screen flex flex-col">
                {selectedConversation && (
                    <div className="w-full bg-indigo-50 rounded-full h-[70px] flex items-center px-6 mt-4 md:mt-10">
                        <div className="cursor-pointer">
                            <img src="https://i.ibb.co/kqSnnFn/download-1.jpg" alt="" width={40} height={40} className="rounded-full" />
                        </div>
                        <div className="ml-3">
                            <h1 className="text-lg font-medium">{selectedConversation?.email}</h1>
                            <h2 className="text-sm text-gray-500 font-semibold">online</h2>
                        </div>
                    </div>
                )}

                {/* Messages Display */}
                <div className="flex-1 overflow-y-auto mt-4 md:mt-2 py-10">
                    {messages.length > 0 ? (
                        messages.map(({ message, user: { id } = {} }, index) => (
                            id === user?.uid ? (
                                <div key={index} className="ml-auto mb-6 p-4 max-w-[75%] bg-indigo-500 text-white rounded-tl-xl rounded-b-xl">
                                    {message}
                                </div>
                            ) : (
                                <div key={index} className="mr-auto mb-6 p-4 max-w-[75%] bg-gray-200 rounded-tr-xl rounded-b-xl">
                                    {message}
                                </div>
                            )
                        ))
                    ) : (
                        <div className="text-xl font-bold p-10">No conversation selected</div>
                    )}
                </div>

                {/* Send Message Input */}
                <div className="p-4 md:p-10 w-full flex items-center">
                    <input
                        className="flex-grow p-2 border border-gray-300 rounded-lg w-full"
                        placeholder="Type your message here ..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button
                        className="ml-2 bg-green-500 text-white px-6 py-2 rounded-lg"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* Right Sidebar - All Users */}
            <div className="w-full col-span-1 bg-indigo-50 border lg:h-screen">
                <div className="p-4 md:p-8">
                    <div className="text-lg text-green-500 font-semibold">All Users</div>
                    <div className="h-[400px] md:h-auto overflow-y-auto">
                        {firebaseUsers.map(({ _id, email, displayName },index) => (
                            <div
                                key={_id}
                                className="flex items-center my-6 md:my-8 cursor-pointer"
                                onClick={() => handleUserClick(_id)}
                            >
                                <img
                                    src={'https://i.ibb.co/kqSnnFn/download-1.jpg'}
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <h1 className="text-lg font-semibold">{displayName || `User${index}`}</h1>
                                    <h1 className="text-sm font-medium">{email}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardC;
