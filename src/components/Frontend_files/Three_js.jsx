import React, { useState } from "react";

const Three_js = (props) => {
  const [check,setcheck]=useState(false);
    return (
        <div>
            <div >
                <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                        <div className="max-w-screen-xl  sm:text-lg text-gray-100">
                            <h2 className=" text-4xl mb-12 tracking-tight font-bold text-white">{props.head}</h2>
                            <p className="mb-4 ">{props.para1} </p>
                            <p className="mb-4 ">{props.para2}</p>
                            <p className="mb-4 font-medium">{props.para3}</p>
                            <a href={props.link ? props.link : props.videoLink} target="_blank"
                                className="inline-flex items-center text-sky-400 font-medium hover:underline">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </a>
                            <br></br>
                            <br></br>
                            {props.videoLink ?(<>
                            <button onClick={()=>setcheck(prev=>!prev)} className="bg-[green] hover:bg-[#00df9a] duration-200 text-white font-bold py-2 px-4 rounded">{check ? "Hide video" : "Load video"}</button></>):null}
                        </div>
                        {props.videoLink&&check ?
                            (<div className="aspect-video flex flex-col items-start mt-6">
                                <iframe className=" rounded-lg w-full h-full " target="_blank" src={props.videoLink}
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen loading=""></iframe>
                            </div>)
                            :
                            null
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Three_js;