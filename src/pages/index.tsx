import Image from "next/image";
import localFont from "next/font/local";


export default function Home() {
  return (
    
    <><aside className="sidebar">
      <div className="profile-section">
        <img src="/images/killua.png" alt="Foto de perfil" className="profile-pic" />
        <h2 className="name">Sebastián Castellanos Mejía</h2>
        <p className="job-title">Front-End Developer</p>
      </div>
      <div className="details">
        <p><strong>Age:</strong> 22</p>
        <p><strong>Residence:</strong> Colombia</p>
        <p><strong>Freelance:</strong> <span className="status">Available</span></p>
        <p><strong>Address:</strong> Medellín, Colombia</p>
      </div>

      <div className="languages">
        <h3>Languages</h3>
        <p><h4>English</h4>
        <span className="percentage">80%</span></p>
        <div className="progress-bar">
         <div className="progress" style={{ width: '80%' }}></div>
         </div>
        <p>Spanish <span>60%</span></p>
        <div className="progress-bar">
         <div className="progress" style={{ width: '60%' }}></div>
      </div>
      </div>
      


      <div className="skills">
        <h3>Programming Languages</h3>
        <p>HTML <span>90%</span></p>
        <p>CSS <span>85%</span></p>
        <p>JS <span>80%</span></p>
        <p>PHP <span>75%</span></p>
        <p>WordPress <span>85%</span></p>
      </div>
    </aside>
    <main className="w-3/4 ml-auto p-10">
        <h1 className="text-4xl font-bold">I'm Rayan Adlrdard <span className="text-yellow-500">Front-End Developer</span></h1>
        <p>Lorem ipsum dolor sit amet...</p>
        <button className="bg-yellow-500 text-white py-2 px-5 mt-5">Hire Me</button>


        <section className="mt-10">
          <h2 className="text-3xl font-bold">My Knowledge</h2>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="bg-white p-5 shadow-md">
              <h3 className="font-bold">Web Development</h3>
              <p>Blog, E-Commerce</p>
            </div>

          </div>
        </section>
      </main></>


  
  );
}
