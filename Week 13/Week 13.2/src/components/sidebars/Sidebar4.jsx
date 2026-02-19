import { useState } from "react"

export const Sidebar4 = () => {
    const [open, setOpen] = useState(true);
    const imageAddress="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIASgBKAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABgcIAQIFBAP/xABPEAACAQIDBAUHBgcMCwAAAAAAAQIDBAUGEQcSITETQVFhgRQiMkJxkaEIFSNiorJSU1SSwtHxFhczN0RVc4OksbPwGCQ0NWZyk6XS0+P/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqAB1qTjCDlOSjFcW29EiD5g2qZTwWU6bxFXlePB07NdJo++Xo/ECdAonFtvdduUMHwSMVp5tS5q6vxjH9ZGL7bPnO5f0N1aWXdQtYv7+8Bp0GVv33c9a/78/slD/1n2WO2bOdu/prq0vO6vaxX3N0DToKJwrb3XW7HF8EjJL0p2tVp+EX+snmX9qmUsZlGn84qyryenR3i6PX2S9H4gToHWnOE4KUJKUXxTT1TO2oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA61JqnFyk0opatt6JAcuSXMgOe9qODZWdS1t2r/ElqugpS82m/ry6vYuJBtqG1qpczuMGytNwpLWFa+T0cu1Q7F3kKyLs+xjOVbpqWlth+/9Je1U3r27q9Z/51A+XMmd8x5tqqliF3OUKklGnZ20XGDb5LdXF+Op7mWNjmZ8YpxrXkIYXQktV5Tr0jXD1FxXjpyL0ylkTBMqUl820N64fp3NXSVSfj1eGhJVFJtgVXhGwvL1ooyxK8vb6qvSSmqUH4Lj9olNls3yhaUFShgFlUSfpVoupLxcm2/eSxvQ/OtXp0KbqV6kKdNc5TkopeLA8T9xOWN3c+YcP3dNNOgWmh8V5s2yfeUJUqmAWdNP1qEejl746NHu/PmE/wA52X/Xj+s+ujXpV6aqUKkKlN8pwkpJ+KAq7FthWXrmMpYbe31lVfopyVWC8Gk/tFdZm2O5mwaEq1nCGKUIrV+Ta9IufqPi/DXmaaT1OJRUgMlZczvmPKVV0sPu5xhTk41LS5i5QTXNOL4rw0L3yLtRwbNDp21w1h+JPRKhVn5tR/Ul1+x8T2M3ZEwPNlN/OVvu3KWkLqj5tSPj1+OpnrPOz7GMmVumq6XOH7/0d7STWnZvL1X4+IGrE9TkofZdtZqW06GDZpnKdJtQoX0nq4a8lPtXeXtCanFSi04tapp6pgdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEnotSidtO0WVzVnlvA67VKDcb2tB6b7/AT7O39pN9sGcXlbLjo2lXTEr9Sp0WudOPrT8NVp3spLZnk6tnPH+jrb3kFvpUu6vW9Xwjr2vR/ED2tlWzapmerTxXGITp4PB+bHXR3L7F2R7zRlpaW9pbUra1pQo0KUFCnTpxUYxSWiSQsrahaWlK2taUKVClBQp04R0UYrkkuo/cAdZtrTTtOXyK421ZxqZbwCFlYVdzEcQ1jGSfGlTXpS9vUvb3AeVtI2u08Hr1cJy4qVzfQe7VuZcadGXXFL1pL3J+xoozGsexfGbidbFsRubqcvxtVtLr0S5JdyR59RtvVttvm31nQDnU9LBcdxfBriFXCcRubWcfxVVpPr0a5NdzR5hzyA0Ls32u08Xr0sJzGqdvfTe7SuYrSnWl1Jr1X8PYW5Ft66mIacmnqm001o09NDS2xTN88x5fnY31XexDD9Iyk3xq036Mvb1P2d4Fkn4Xdpb3ltVtrqjTrUasXCpTqR3oyTWjTXWfsuRyBmzars2qZYq1MUweE6mD1HrKPFu2fY+2Pee5sX2iu2qQy5jtw+im1Gyr1OO4/xbfZ2fsLwvbahd2tW2uqUKtCtFwqU5rVSi+DTRlnaZk+rkzMHR0N/5vuE6lnV7Enxhr2x4e9MDVkXqjkr/Y/nN5py90F5V3sSsUqdbV8akfVn49feiwFyAAAAAAAAAAAAAAAAAAAAAAAAAHWc4whKUmlFLVvsR2ILtjxv5lyJf9HPSveLyWDXNb/pfZ194FA7QMwVc2Zwub2jGU6bkqFpCK1bgnpFJd7bfiaR2d5YhlPLVDD9E7h/SXM161Rrj7uXgUZsOy9HGM5xuq8Iyo4ZDp9JfjNfM9z4+BplLTUDkAAcPkZg264lK+z9c271ULKnCjFN8NWt5tfnL3GoG9FqZS2z0alLaRjEqkHFVJU5Q1610cVr8GBCQAAAAAsPYViUrHP1tbrVxvac6MorlwjvJ/Z+JXhNtjFGpV2kYPKnFyVOVSU9OpdHJa/FAatXIBPVagARjaLlinmzLVfD9ErmP0ltN+rUS4e/l4knOGtQMkbP8wVMp5wtb2upQp7zt7uElo1BvRprq0aT8DW0JxnCMotOMlqmutGZtumX44PnKV3Rgo0MSh0/Dqqa6T6ut8fEuHY5jbxrIlg6s96vZp2tRvm930X+bp7gJ0AAAAAAAAAAAAAAAAAAAAAAAAUV8pDEm7rB8MjNbsYzuJw7292L+8XqZi283nlG0S5pfklvRo8u2O/+mBY/yeML8lyndYjUhpVvbqW7LXnTglFfa3y1iKbLLana7P8AAoUo6KdrGo/bLzn8WyVgAABxL0WUX8orL0+lscw0afmP/VrlpcnxcG+7mvd2l6nw4zhlpi+GXGH39JVLavBwnF/55gYrktDgmWf8g4jk++m5051sMlL6G7S4aPkpdkiHS58gOADmPPkAitS7Pk65en019mGvTfRpeTWzfW+Dm13cl+wgmz/IGI5wvobkJ0MMjL6e7a4JdcY9suo1Hg2G2eEYbQw/D6ap21vBQhFP+/vA+2PCKXYcgAAABVfyhsL8qyla4jCGtSxulq9eVOacX9royO/JvxGSucYwyU1uyjCvCGnWvNk/ullbU7andZAxyNWOqp2sqi9sdJL4pFHbBrx220W2pfldvWovh2R3/wBADToAAAAAAAAAAAAAAAAAAAAAAABlbbZ/GbjX9R/gUzVJmLbxaeTbRbmt+V29Gtz7I7n6AF+ZA3f3F4JuabvkVPTTlyJCRPZXdUrvZ/gc6L1ULZUm/rR81/FMlgAA4bQHJxIiWeM94Rk62Ur6brXc19FaUtHOXe+xd78DP+cNpOPZo3qNW6naWTf+y28nGLX1nzl48ANMRxPBsTuK+Fq7s7uso/S22/GfDvRCcf2L5YxSc6tk7jDK0vxDTp6/8j/uTRm6jXlQqRqUZyp1IvejOD0kn3PmiaYRtYzfhUVTjifldOK0jG8h0j/O4SfiwJx/o+f8Uf8Abv8A6klwDYvlfC5wq3vlGJ1o6cLhpU9e1Qj1dzbK9/f1zL0W75Hh+/ppvbkufbpqeJi+1jN+KxdOWJ+SU5LSUbOHRv8AO4yXgwNJyxPBsMuKGFO7s7StKP0Vtvxhw7kerHTqMR1q8q9SVStOVSpJ70pzesm+98yX5P2lY9lfdpUrqV3ZL+S3EnKKX1Xzj4AauBEsj57wjONq5WU3Ru4catpV0U4967V3oliaA5AAEfz/ALv7isb39N3yOprry03TO2xP+M3Bf6//AAKhfu1S6pWmz/HJ1nop2zpJ/Wl5q+LRR2wa08p2i21b8kt61bn2x3P0wNOgAAAAAAAAAAAAAAAAAAAAAAAFE/KQw5+U4RicILSUZ2859686K+8XsQXbHgjxrIl8qUHK4s0rqCXN7vpL83X3AeL8nrFPKsp3WHTqb1Sxunux000hNKS+10hahmbYbmCOD50ja15qNDE4dBq/w9dYfq8TTCbYBvR6aEC2obQbfKFi6Fo4VcYrwbo0nx6Jfhy7teS6ySZtx23y1gV1i11xhQj5sdeM5PhGK9rMkY9jV5jmL3OJYhPpLivNttrgl1JLqSXAD8cSxK6xS7q3mIVqlxdVXrOrUlq2/wDPUfGAAAAAAAAAB9mHYjc4Xd0rzD69S3uaT1hVpvRpmmdl20GhnCwVvdOFLGKEE61JcOlXLfj3a811GWj0sBxq8wLF7XEsPn0dxbz3o9jXWmutNcANoJ6nJ4uUcdtsyYHa4raehWj50euElwlF+xnsyegFWfKFxTyXKdrh0Km7Uvrpb0dOcIJyf2ujI78m/Dn5TjGKSgmowhbwn2N+dJfdI3tyzBHGM6StaE1KjhkOg1X4eus/dy8C4NjmCvBch2Cqwca92ndTT5re9Ffm6e8CdAAAAAAAAAAAAAAAAAAAAAAAAHWcYyhKMlrFrRrtR2AGR9oGAVcpZvubOjKVOmpK4tKkXo1BvWLT7mmvA0hs8zPDNeWbe/TSuY/RXMF6tRLj7+fieRtfya80Zedezpb2JWClUoaLjUj60PHq70UjsyzfUyfmFTuXNYfc6U7qn2aPhPTti9fDUCX/AChMx+VYra5foT1p2kVWr6P15ein7I8fFFNy5s9XNeJyxnMmJYlKbkrm5nOOvVDV7q8I6I8kAAAAAAAAAAABzHmjgAXL8nrMfkuK3WX689Kd3F1qGr9ePpLxjx8GWvtCzPTyplq4xBvW4f0dvB+tUa4e7n4GWcqYpLBcyYbiUZuKtrmE5Nc3DVby8Y6rxJBtMzfUzhmFztnN2FtrTtKfbq+M9O2T08EgPk2fYBUzXnC2sazlUpuTuLucnq3BPWWr69W0vE1tCEYQjGKSUVokuogOyDJjytl5VrukliV8lUr684R9WHh197LAQAAAAAAAAAAAAAAAAAAAAAAAAAAAcPiiiNtWzl21SWY8CttaMm5XtCC13H+Gl2dpfB1qQVSLjJJxa0aa1TAxA09dHodS69qGyOpQlcYzlaDnSes61jFauPa4d3cUxKnpOUZPRp6NNcUB+YAAAAAAAAAAAH6Rp6zjGL1beiSXFgdUnrwLp2LbOXcVIZjx230pQkpWVCa03n+G12dhzsu2SVK86GM5og4UlpOhYyWjl2Ofd3F6whGEVGCUYpaJJaJAcxWiOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhxTer5kBz3suwbNLqXdBLD8TerdxShwqP68ev28yfjRAZFzTkHMGVpy+c7Jyt1yubfWdN+OnDx0IxJJLU2/OEZQcZRTi+aa11IRj2yrKWNSlUeHRs674udm+j1ffH0fgBlUF2YrsDrrflg+M05rTzKd1S0evfKP6iM32xbOVt/AW1pef0F1Fff3QK5BOv3os9fzF/a6H/mfXY7F85XH8PbWln/T3UX9zeAro7RS01LrwrYHWbjLGMahGOnnQtaWr8JP9RPMB2VZSwWUaiw2N5XjxVS8fScdOqPo/ADP+V8g5gzTOLwyycbd/wApuNYU146cfDUvvImy7BsrOnd10sQxNaNXFWHCm/qR6vbzJ7CEYwjGMUkuSS5HbRAcKKT1XM5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==";

    return <div>
        <div className="flex">
            <div className={`${open ? "w-72" : "w-16"} h-screen transition-all duration-300`}>
                <div className={`h-full bg-gray-50 ${open ? "p-4" : "p-2"}`}>
                    <button onClick={() => {
                        setOpen(e => !e)
                    }} className="">
                        Close
                    </button>
                    {   open && <div className="flex items-start justify-between">
                        <div className="bg-blue-500 rounded-md p-2 text-sm flex ">
                            <div className="text-white">Webinar</div><div className="text-green-400">.gg</div>
                        </div>
                        <div>
                            <img src={imageAddress} className="w-10 h-10 rounded"></img>
                        </div>
                    </div>}
                    <div>
                    <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

function ListItem({title, icon, size}) {
    if (size === "sm") {
        return <div className="hover:bg-slate-200 flex justify-between cursor-pointer rounded-xl text-blue-500 p-2 my-4">
            <div>
                {icon}
            </div>
        </div>
    }
    return <div className="hover:bg-slate-200 flex justify-between p-4 m-4 cursor-pointer rounded-xl text-blue-500 ">
        <div>
            {title}
        </div>
        <div>
            {icon}
        </div>
    </div>
}