import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Aboutus = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
        OUR TEAM
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="https://avatars.githubusercontent.com/u/100297235?s=400&u=3234037f15e50cca6bd9e93bac26545dcf480ea7&v=4"
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Apurv Krishn Jha
            </h2>
            <h3 className="text-gray-500 mb-3">Student</h3>
            <p className="mb-4">
              This Project is Build by me and You can contact me for any query or modification. Thanks !
            </p>
            <span className="inline-flex">
              <a className="ml-4 text-gray-500" href='https://twitter.com/Apurvjh67211159'>
                <BsTwitter/>
              </a>
              <a className="ml-4 text-gray-500" href='https://github.com/apurvjha123/khetibari'>
                <BsGithub/>
              </a>
              <a className="ml-4 text-gray-500" href='https://www.linkedin.com/in/apurv-jha-7367b1236/'>
                <BsLinkedin/>
              </a>
            </span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

  )
}

export default Aboutus