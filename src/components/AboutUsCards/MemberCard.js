import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPhone, FaPhoneSquare, FaTwitter, FaVoicemail } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link';
import Image from 'next/image';

const MemberCard = ({ data }) => {
    var profile = data.profileImageURL ? data.profileImageURL : "https://pics.craiyon.com/2023-07-20/4e251c98f18f4fbf904265d4f2f02e2b.webp";
    const designation = data.bodies[0].responsibilities.join(" | ");

    return (
        <>
            <div className="w-1/4 relative mt-16 mx-1 mb-32 sm:mb-24">

                <div className="rounded overflow-hidden shadow-md bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600 ">
                    <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                            <Image src={profile} fill={true} alt="Member Photo" role="img" className="rounded-full object-fit h-full w-full shadow-md" />
                        </div>
                    </div>
                    <div className="px-6 mt-16">
                        <h1 className="font-bold text-white text-3xl text-center mb-1">{data.name}</h1>
                        <p className="text-white font-semibold text-sm text-center">{designation}</p>

                        <p className="text-center text-gray-200 text-base pt-3 font-normal h-32 overflow-x-scroll">{data.intro}</p>

                        <div className="w-full flex justify-center pt-5 pb-5">
                            {data.linkedin && <Link href={data.linkedin} className="mx-3">
                                <div aria-label="LinkedIn" role="img">
                                    <FaLinkedin className='text-cyan-500 h-5 w-5' />
                                </div>
                            </Link>
                            }
                            {data.github && <Link href={data.github} className="mx-3">
                                <div aria-label="Github" role="img">
                                    <FaGithub className='text-cyan-500 h-5 w-5' />
                                </div>
                            </Link>
                            }
                            {data.instagram && <Link href={data.instagram} className="mx-3">
                                <div aria-label="Instagram" role="img">
                                    <FaInstagram className='text-cyan-500 h-5 w-5' />
                                </div>
                            </Link>
                            }
                            {data.email && <Link href={data.email} className="mx-3">
                                <div aria-label="Email" role="img">
                                    <MdEmail className='text-cyan-500 h-5 w-5' />
                                </div>
                            </Link>
                            }
                            {data.phone && <Link to={data.phone} className="mx-3">
                                <div aria-label="Phone" role="img">
                                    <FaPhoneSquare className='text-cyan-500 h-5 w-5' />
                                </div>
                            </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberCard