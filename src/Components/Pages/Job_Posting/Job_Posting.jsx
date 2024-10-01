import { getAwards } from "../../../Hooks/getHooks/getAwards";



const Job_Posting = () => {

    const{users}=getAwards()
    console.log(users)
    return (
        <div>
            This is job posting page
        </div>
    );
};

export default Job_Posting;