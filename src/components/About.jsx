import React from 'react'

const About = () => {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    Explore and Manage Your GitHub Profile with Ease
                </h2>
                <p className="mt-6 text-gray-600">
                    Welcome to <strong>GitHub Explorer</strong>, your ultimate companion for managing and 
                    exploring your GitHub profile effortlessly. Our website is designed to 
                    provide you with a seamless experience to access a variety of GitHub 
                    functionalities in one place. Whether you are a developer looking to 
                    manage your repositories, stay updated with your followers, or simply 
                    explore GitHub's vast ecosystem, GitHub Explorer has got you covered.
                </p>
                <p className="mt-4 text-gray-600">
                    Join us and explore the full potential of your GitHub profile today. 
                    Experience the convenience, efficiency, and power of GitHub Explorer.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About