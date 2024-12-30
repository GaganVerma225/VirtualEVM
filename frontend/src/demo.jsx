import './demo.css'
import { useState,useRef,useEffect } from 'react';

const options = [
    { value: "cat", label: "Cat", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAADp6en5+fni4uL7+/vt7e03Nzf19fXc3NzV1dXS0tJRUVGhoaHy8vLPz8+BgYEuLi65ublMTEx6enqxsbEdHR3Dw8OZmZkYGBiQkJA8PDxbW1t1dXVwcHCkpKRnZ2cODg5FRUUqKipqamqJiYnHx8dhYWGTk5MUFBQrKyscHBw6OjpCQkKzoJoeAAAOaUlEQVR4nO1deX+iPhMvaPFWRFHbemHrsd3t+397z+Ik5JpAkCTu7/Pw/WsXaZJJJnMnvLy0aNGiRYsWLVq0aNGiRYsWLVq0aNHi/wThevakjjfxbd133Uv3fRUEwdh1Nxg6wR3jtOOwk/QDeglih53oEAcUu4GjLiYBg39G7XO9B1sXNPL0BcHcQQ/l2Aj9B9uu5fbTQMLacgeVWMkjiF8ttj7syc0HW4vNm2CkjCAIUluNd/ZI64FLiYZgiY3hZIdVFQZ9CpvigwjOzVuOxpq2/SqMi2YUwa+mUv2ga9mzNEWZFLBr0u50oW84mNoavQk+SwaSjR5uVrMDCXxuxLB0JMHtwWa/ypu1sMmNkZQPJTg9wlDDika9bsRz1WAe4KhJZZs+NeKpejSKwOmHw3WSpodJmqbJrBtJP2+rm/RpfRuMJpiH9O3pbBKffisvfB9va2oiRGWiq8DEG4Fdk+EEwV+Z+jqaXLPSl7aTgXGDV28Urs0GFLyXaTcOu8zsvU9vFG6qB+MGzmMmFNdnUfi4LVET88fGl31c9/vdbrf/2j7YgjX/rAKvdQf2s5tcBjKHRcP0ffxWryFf7sWgzqD26aDM+Q+TZWbemC9hWmWzFVhMjFzi7kHnEsr45Zo0gncz8tIaxuk0NVMs7ogScDSY7E1Y3Y6IoRLbQlC71cdQKR4Wj3lyaVZJoavYs4h+xSiuw4ebTqvWMbFIhx7lRuS1WbwtKafxYImGikGUjOBPc6tDH4r6i42F8VejxFW1YnO87vQdNApzGUMbZ9vZ8sFHqjNJ4Efla7zx7GKxD90s+smU/uCzazMxo3VBF1Y70QGVdtat/gh1P35sd4MC6/lxFagHthu+HfSjQu235ybeHqs9+TG9lW6d5S6RaImrrnh05E6P7vpSVa+7vhgiqU+nSlgh0a7ExiGZpXu3vcm+qA8KxRiG8/qBpX8KhRSRB/0kRjjc9ydWYWQeskGvvIXx5r6/l5cZ16HtMiEU/Mb/8NEhR6Efj5vPfXspG2L70I+z9sKHvo4+uitkqZc9cUfH76QWVQourG0NCl/q3Ut3pLOll84IqJ/hJQtM8zI++ipATUUv8VISC/OV6CI4e6QQIt6+S3YJ5zi2gu8g6hCN20fr2278sV0eHhRC/dF6vb7MBpilRHxFD7VtS90SDs58xciudmj4smR//x0rf05yCR6C3pqOLh+BhF6t9IwS6e7J5UEwtb1GgzcBsWikiqYQzf4t5LonLdJfyJ9L2p1Y/M7za+CRnqQBYvTlMAsSh2rZ+h0rkZrMD5sCM4qK96Yj0Mw2n+n/XFAOoDBc295T6Fnwmkrrh6pXsYRAsSPyom2SJFzUXrBzCZoxYpADWyJ4F5vY347NYVivI/+IuuDzLzRlUxWlpoWcpytakMEnmyBh4tiYgnovfrcTKfOdC/dXbEeW1y6TdOvirsmxwlxO58DPjquGoFdeVUEChQpXbFOV8im8QrUcknzlvNBU6MoNiHXI6TniDxclXYjYKZN+qdQgUhPIxPFQJtkBgJ6MewKcw5QzVqhR4hCA8mGMjBwCYCnDSJpNFwBRyge8QM4c5AcCvrTtdeVlekHEDeMY+f8OcJBHTJiUK5FQ7NOgRIWlCoVIgpn9mt3/b9luS3qrr7RocyMxFd123FZDCNQfTdjLE4QxOROeoFk4hRh1h01DtkQ2ZtvJKM8YgFXKHYmhKrDYamj+XRs/IizN2B4rCmQq8YvN13R2iH/ua/rWjEY+DftzXsOcc7uO/vab2B54vZS2goK+QLU4asH9KV6H7m9pLOzWZg4VanMyClkgE07laSoodLF4JjmhSbwWiVGgqUFpRCFapcco5I3K+fKM16Hogzrcir99xbr6eDY/OIUNvY0p0i+jsOIMG4WOj8wOkjAeR49bfTVOKYapTCSTNFWFmAS6LKMZhSy+pqzh6by2FJoaHvizPZy2MKNQp/KVogcUTBLzFP7Eqe3gaTeJSZkS59GYlaBrayaN/pppfJClp/056brKdoPtywkOs/NB2lN1FYdGAV3pdadZS7Jx2AOzoxfa9srP/QJ+s9fBpnF7HBg65Wxfk3OD+pJJE0nFebzwwG1qPbv3wXFdac0yQUncoeTUOwUzQ4n2dRvYB8nCRzEMKCwp2CiPQ+XgNj1YTO4OIUaFLBWi0dVbqTRQU3n+RonT9NZOwt6zMx+XFmyUylPP/BLONueNKFm1Jd0A3qT9Qx/+2m4uNnk1TJVjQPzP0woCeeEOTN7jvfQKacyJFZmj94fSU3HG2GDVyII1UR4S5jmaas83fmSl5/CRuKWAa9qYSLwwX5SO2otOAklTFE8FI6dEngpbWHO6raEBINnGvRRcYinZrL/vQfBsIvyx/izcO/7XEprpR37si0NIJfZKeq2jMb9EMcp8LckG0BySEVcHWDxLlrIX2izMXxz5PSYQpsSSTzlmSIxtJdujGsrxLbaX1CjEdO4WziA9n7LixYY2Tr7H3uIZ289gpiGVOxfJz8jUXGbhwSohz0hexqvsGpEACXsczdL4Oq+ZTEcxEucIRonGJaJJIQxWOzRxSBYaG1R0Yybu51lV6qB23afxC92g8T473XWSJDN5jV5pJD5XDZ86tgqT2zK+pajNQgSCl/OHsB9qle4kxdDuwoY87dS5jIVsgTq9PoyNZiuVILfMYBXvioHIyFWNKNkQl1BuQPRSndLEFRWCIDMhP3aosySL+tPaAET31bDw74bZOQqpI/ExgGfGyc5L/VltAmIrH2v8CaekeR/FWFeT/Ia3C9uIrVqjcu21IPH0wm59lC0jLQ4+d2EOYqzWcraJst+zfwZvpnxOLVKPV30tH5jTaHLcnkEThudelv2Yq7ZFTZ62ABqr9lPLTnjUhznDQKpgfBwKKtwbL+dzGIiw8XB4nAZJ/JxDUPt1f63R/Bk8moNejuH6AMTiOTyag6o1t9Y+DRN5OkMmoueBROpUP3ohajMUcVJne7GwhHycssBQBJbGbtKVIS0g83chpIwi1LhyIQeK2hrfl7HzYNFU+xZVUYz7vBXMEWV0HJa3yrQI3B3tNlwbncItanDHtQp2FZXP+581YO6eNZnKVSn5udurAly82k4NAZc4f9IXdGQMWFnwonkRz4wFhnueAk8G4D5HcWymOLpcNk/l+mn4NJr5qsvx46wV8iksmeXXkIRbHLxdJiygz2dSV/UvvszR5b9McpSc6xFXuOPn4j0FYvFsz+xuVv7v+RTvLzmvI6bCPzx/kIVCqnH7jM0/6DUSL71SdqCcX5z7uKYGgZpo78VJ5VpGiZIC/iO9ohbqHp0QUAXk8rE7FudkiLNVNJvs0fvtpKAMkkN/hksMuYVTgh0pyX+47s6TwyFN/iJND7fdFjsbS+syBL1KPdG/UvR1RguUnkAhdDzKj61nmtWswm1KRYpQN02sVBKdJSadf4EKeSXiy83i+kReQQGSzcxzIaQBCu+F6A2fxOUgwoDJle7E9JLu+8wU3xgkSQqubpaYTAXNI3UOfAA0vliy3hlODC7GDlbxmhdEN4UAiUKyzJ5d/5G8hAWmo8N5rPtQwHy7uShKE24f4FJvoGhZGIHsS79qH6b1qP29Mx2uk8l7vNzt9tfjcbeMN8mli4+RqHdml8IOYGYOSQzZvPO2EjPtEj4CUJFcHD+VmBI0hldpandnkEXkzxkmgsMiCVcPIJl9a5GaDBFbPGAK/Ny4C9jLbNUQRO1rCxNgU/j7rg61quwpKHIMQ5vXGsrS1jXIlFtscV9OwtD3GoIZZTOyOVNkjYCR5V1RhaFVVQHgymURpFZFdzXODmaUlDxrfn23zjTlANluNzpNDHlN2O4kmXGOQZSh5aM6pxI2JaLWzxdZXihD2b4c9lAinxPrsrscCydGYlSyTrC+3u6HdXV701w7cUR2e3MtXN3ABY4w9j0LiB34+nwXNWjs66aRbubWFSaddXwZ9nfY8/rkNd1UWQhAiOKv0FM8/qLev802RR4u5moOVtVGkHog946r7yU0vNmoL0rGQ5lNRnBDJSYphve3C9UT+jjARin8q7HB3oX9Jh0/ojkoj+nvGTYOFV1R9n8aUIjNHU1v+fqWZQ4w8yurekKB5V6N5K/K/zSF6rXYFNim0swPhYkAK6GqwBioYfJoUERdvZ27yAF8U1miDBTSvCDInaoTM+BYU2MpYseF/VbTAoWV9Z9gZlJ/r2/Ea3NO/g65LKrncuFaFFKxYUYhkZrRKOWTxMbnUGzhZkbh9GEKJYy9Fykot/DhECmMTChEL1vwaMpQGAaF+gKFoQmFyL0wW98cmgNcADmyGcrSgHiRxFzuohT2RQZUEqxbb98dF0DYT7RLj2pRD7wm3D0oUbgUmV26QuHz9oz1uwMGIET075wrGVbZ/TWiqjEK70zJ1bIRA+3329vH9Zw8jbwXeuPDWH0kvvaLX2qMwu/8EXcMFgj0FowpAXG5+Uk+IRSu+LeGCIWSxCJeksdv2WhBfO4j9+gD2ZpAIRFAA5XCUKSQOBY+U4R6EHuR20ILZPrByCQuMMKlA5FCYmR7TdVrQcvq2GiuyOi+eaqBQiE7NhQ4gbhJfr6NWw1q9MdUQUCqRkwrzHkKYVIEJXrhKaRnoZ8pQXmwGyxj4EKwVUUDS6BQtOHuAIEFxQe0yPEJJpoG3O2/88kA9xkFCjsqhZCL2L30hyl1dJ953kmG+LX1K1SAFQZKJwq7IQw76Q4G3W5IjOrBYDi7rPNazMm7euOWx3CaAfDbvlarDH1uhn/nsMUdU83nyB/HvyJlGIZWaVw851BFBcL3zBaBnj/qVgPDd92V3sb4HJ//DUtGi85ssoQL73m8fc9zrHJkgLe//5z3fhbbr2V8vh2S/INrYedJBykewDQMuznCMOr/d0bdokWLFi1atGjRokWLFi1atGjRokWLEvwP70Gly7J/QS4AAAAASUVORK5CYII=" },
    { value: "dog", label: "Dog", img: "data:image/png;base64,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" },
    { value: "cow", label: "Cow", img: "data:image/png;base64,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" },
]

function Demo() {
    const [selectedOption, setSelectedOption] = useState(options[0]); // Default to first option
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle option selection
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
                <div className="container">
                    <div className='symbol'>Select Election Symbol</div>
                    <div className="custom-select" ref={dropdownRef}>
                        <div
                            className="select-selected"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <img src={selectedOption.img} alt={selectedOption.label} />
                            <span>{selectedOption.label}</span>
                        </div>

                        {isDropdownOpen && (
                            <div className="select-items">
                                {options.map((option) => (
                                    <div
                                        key={option.value}
                                        className="menu-item"
                                        onClick={() => handleSelect(option)}
                                    >
                                        <img src={option.img} alt={option.label} />
                                        <span>{option.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
        </>
    )
}

export default Demo