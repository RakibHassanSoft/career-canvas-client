import getSkills from "../../../Hooks/getHooks/getSkills";
import Resume1 from "../Resume_Templates/templatesColllection/Resume1";
import Resume2 from "../Resume_Templates/templatesColllection/Resume2";


const User_Profile = () => {
    let { temId } = getSkills()
    // temId = parseInt(temId)
    let temRealId = parseInt(temId)

    return (
        <div className=" min-w-7xl m-auto">
            {
                temRealId === 1 ? (
                    <Resume1 />
                ) : temRealId === 2 ? (
                    <Resume2 />
                ) : temRealId === 3 ? (
                    <p>hello</p>
                ) : (
                    <h1>loading.....</h1>
                )
            }



        </div>
    );
};

export default User_Profile;