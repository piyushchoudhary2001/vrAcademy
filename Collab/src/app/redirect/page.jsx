'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';

const redirect=()=>{
  return(
    <>
    <div className="text-center place-center mt-10 lg:w-1/2 mx-auto pr-5 pl-5">
    <h2 className="text-2xl font-bold text-center mt-[8rem]">Course Options: Online vs Offline</h2>
    </div>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mr-[20rem] lg:ml-[20rem]">
    <section className="pricing py-12">
          <div className="price-card mx-auto p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-sm font-bold mb-1">Online</p>
            <h3 className="text-xl font-bold mb-4">100% Online</h3>
            <div className="price text-3xl font-bold text-indigo-600 mb-2">₹599</div>
            <div className="cut-price text-gray-500 line-through mb-4">₹699</div>
            <p className="mb-8">For those with busy schedules, remote learners</p>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Peer collaboration</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Downloadable resources</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Certificate of completion</span>
              </li>
            </ul>
            <a href="https://codelatent.fermion.app/api/buy-course?course-slug=accounts-online"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                Enroll Now
            </a>
          </div>
        </section>
        {/*Emi card*/}
        <section className="pricing py-10">
        <div className="price-card mx-auto p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-sm font-bold mb-1">Offline</p>
            <h3 className="text-xl font-bold mb-4">Access Offline Versions</h3>
            <div className="price text-3xl font-bold text-indigo-600 mb-2">₹849</div>
            <div className="cut-price text-gray-500 line-through mb-4">₹999</div>
            <p className="mb-4 text-sm">you can access offline versions of the course
            </p>
            <ul className="text-left mb-8">
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Comprehensive Curriculum</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Instructor Support</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Flexible Learning</span>
              </li>
            </ul>
            <a href="https://codelatent.fermion.app/api/buy-course?course-slug=accounts-offline"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">            
                Enroll Now
            </a>
          </div>
        </section>
        </div>
      </>
  )
}

export default redirect;