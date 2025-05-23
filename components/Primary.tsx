import React from 'react'
import Spotlight from './Ui/Spotlight'
import { TextGenerateEffect } from './Ui/TextGenerateEffect'


const Primary = () => {
  return (
    <div className='pb-20 pt-36 text-center'>
        <div>
            <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-amber-50" />
            <Spotlight className=" top-50 left-full h-[100vh] w-[100vw]" fill='purple'  />
            <Spotlight className=" top-35 left-100 h-[20vh] w-[10vw]" fill='white'/>
            <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw] " fill='blue' />

        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.5]  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>

    </div>
    <div className="flex justify-center relative my-4 z-10">
      <div className='max-w-[150vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Thashenu&apos;s portfolio </h2>
       
        <TextGenerateEffect 
  className="text-center text-2xl md:text-3xl font-bold"
  words={`Hi, I'm Thashenu Kularathna, an ICT undergraduate and  Traning System Engineer (DevOps) with a strong passion for DevOps and cloud computing. I specialize in containerization, automation, and infrastructure management, working with technologies like Linux, Docker, Kubernetes, Terraform, Snyk, and CI/CD pipelines.

My technical expertise includes Java, C, Go, Bash, and JavaScript, along with tools such as Git, Jira, VS Code, Docker, Kubernetes, Terraform, Prometheus, Grafana, React, Ansible, and NGINX. I also work with Linux-based systems, MySQL, MongoDB, Jenkins, GitHub Actions, and cloud platforms like AWS, GCP, and Azure.

I&apos;m always eager to explore new technologies and improve system performance through automation. Let&apos;s connect and innovate together! 🚀`}
  filter={true}
/>

        </div>
    </div>
    </div>
  )
}

export default Primary
