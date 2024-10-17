import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/AxiosHooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";



const ResumeMe = () => {
  const axiosPublic=useAxiosPublic()
 const { user } = useContext(AuthContext);
  console.log(user)

const[userDetails,setUserDetail]=useState()

console.log(userDetails)


// // for get from backend
// useEffect(()=>{
//   axiosPublic.get(`/api/formdata/${user?.uid}`)
//   .then((res)=>{
//     console.log(res.data)
//   })
//   .catch((error)=>{
//     console.error('fetch error',error.message)
//   })
// },[user?.uid])
// console.log(userDetails)



useEffect(()=>{
  fetch('../../../../../public/person.json')
  .then(res=>res.json())
  .then(data => {
    setUserDetail(data); 
  })
  .catch(error => console.error('Error fetching :', error));
},[])

 
    return (
      <div className="w-full mx-auto p-8 bg-gray-50">
        {/* Resume Title */}
        <header className="flex justify-between items-center border-b-2 pb-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">{userDetails?.personalInfo?.name}</h1>
            <h2 className="text-lg font-light text-gray-500">Web Developer</h2>
          </div>
        </header>
  
        {/* Contact Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Contact Summary</h3>
          <p>Phone: {userDetails?.personalInfo?.phone}</p>
          <p>Email: {userDetails?.personalInfo?.email}</p>
          <p>Website: <a href={userDetails?.personalInfo?.website} target="_blank" rel="noopener noreferrer">{userDetails?.personalInfo?.website}</a></p>
        </section>
  
        {/* Career Objective */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
          <p>{userDetails?.careerObjective}</p>
        </section>
  
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          {userDetails?.skills.map((item, index) => (
            <ul key={index} className="list-disc ml-4">
              <li>{item}</li>
            </ul>
          ))}
        </section>
  
        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          {userDetails?.projects.map((project, index) => (
            <div key={project._id} className="mb-4">
              <h4 className="text-xl font-bold">Project {index + 1}: {project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
              <p className="mt-1 text-blue-600">
                {project.link}
              </p>
            </div>
          ))}
        </section>
  
        {/* Education Details */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          {userDetails?.education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="text-gray-600">{edu?.institution}, {edu?.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </section>
  
        {/* Languages */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc ml-4">
            {userDetails?.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>
  
        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          {userDetails?.experience.map((exp) => (
            <div key={exp._id} className="mb-6">
              <h4 className="text-xl font-bold">{exp.jobTitle}</h4>
              <p className="text-gray-600 text-lg">{exp.company}, {exp.duration}</p>
              
             <p className="text-gray-600">
              {exp.description}
             </p>
            </div>
          ))}
        </section>
  
        {/* Certificates */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Certificates</h3>
          <ul className="list-disc ml-4">
            {userDetails?.certificates.map(cert => (
              <li key={cert._id}>
                {cert.title} by {cert.issuer}
              </li>
            ))}
          </ul>
        </section>
  
        {/* Awards */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Awards</h3>
          <ul className="list-disc ml-4">
            {userDetails?.awards.map((award) => (
              <li key={award._id}>
                {award.title} - {award.issuer} ({award.date})
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  };
  
  export default ResumeMe;
  