import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className=" bg-[#FCFAF0]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-8 md:gap-4 px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]">
                <div className="">
                    <h1 className="font-semibold text-3xl leading-[40px]">Glowave</h1>
                    <p className="py-2 max-w-[295px]">Discover the beauty of healthy, radiant skin with our carefully crafted skincare solutions</p>
                    <div className="pt-5">
                        <svg width="213" height="44" viewBox="0 0 213 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" fill="#45726C" />
                            <g clipPath="url(#clip0_1_443)">
                                <path d="M34 22C34 15.3726 28.6274 10 22 10C15.3726 10 10 15.3726 10 22C10 27.9895 14.3882 32.954 20.125 33.8542V25.4688H17.0781V22H20.125V19.3563C20.125 16.3488 21.9166 14.6875 24.6576 14.6875C25.9701 14.6875 27.3438 14.9219 27.3438 14.9219V17.875H25.8306C24.34 17.875 23.875 18.8001 23.875 19.75V22H27.2031L26.6711 25.4688H23.875V33.8542C29.6118 32.954 34 27.9895 34 22Z" fill="white" />
                            </g>
                            <rect x="56.5" y="0.5" width="43" height="43" rx="21.5" stroke="#45726C" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M81.9455 33L76.396 25.0901L69.4489 33H66.5098L75.0921 23.2311L66.5098 11H74.0557L79.286 18.455L85.8393 11H88.7784L80.5943 20.3165L89.4914 33H81.9455ZM85.2185 30.77H83.2398L70.7181 13.23H72.6971L77.7121 20.2532L78.5793 21.4719L85.2185 30.77Z" fill="#45726C" />
                            <rect x="112.5" y="0.5" width="43" height="43" rx="21.5" stroke="#45726C" />
                            <g clipPath="url(#clip1_1_443)">
                                <path d="M134 12.1609C137.206 12.1609 137.586 12.175 138.847 12.2312C140.019 12.2828 140.652 12.4797 141.073 12.6438C141.631 12.8594 142.034 13.1219 142.452 13.5391C142.873 13.9609 143.131 14.3594 143.347 14.9172C143.511 15.3391 143.708 15.9766 143.759 17.1437C143.816 18.4094 143.83 18.7891 143.83 21.9906C143.83 25.1969 143.816 25.5766 143.759 26.8375C143.708 28.0094 143.511 28.6422 143.347 29.0641C143.131 29.6219 142.869 30.025 142.452 30.4422C142.03 30.8641 141.631 31.1219 141.073 31.3375C140.652 31.5016 140.014 31.6984 138.847 31.75C137.581 31.8062 137.202 31.8203 134 31.8203C130.794 31.8203 130.414 31.8062 129.153 31.75C127.981 31.6984 127.348 31.5016 126.927 31.3375C126.369 31.1219 125.966 30.8594 125.548 30.4422C125.127 30.0203 124.869 29.6219 124.653 29.0641C124.489 28.6422 124.292 28.0047 124.241 26.8375C124.184 25.5719 124.17 25.1922 124.17 21.9906C124.17 18.7844 124.184 18.4047 124.241 17.1437C124.292 15.9719 124.489 15.3391 124.653 14.9172C124.869 14.3594 125.131 13.9562 125.548 13.5391C125.97 13.1172 126.369 12.8594 126.927 12.6438C127.348 12.4797 127.986 12.2828 129.153 12.2312C130.414 12.175 130.794 12.1609 134 12.1609ZM134 10C130.742 10 130.334 10.0141 129.055 10.0703C127.78 10.1266 126.903 10.3328 126.144 10.6281C125.352 10.9375 124.681 11.3453 124.016 12.0156C123.345 12.6813 122.938 13.3516 122.628 14.1391C122.333 14.9031 122.127 15.775 122.07 17.05C122.014 18.3344 122 18.7422 122 22C122 25.2578 122.014 25.6656 122.07 26.9453C122.127 28.2203 122.333 29.0969 122.628 29.8563C122.938 30.6484 123.345 31.3188 124.016 31.9844C124.681 32.65 125.352 33.0625 126.139 33.3672C126.903 33.6625 127.775 33.8687 129.05 33.925C130.33 33.9812 130.738 33.9953 133.995 33.9953C137.253 33.9953 137.661 33.9812 138.941 33.925C140.216 33.8687 141.092 33.6625 141.852 33.3672C142.639 33.0625 143.309 32.65 143.975 31.9844C144.641 31.3188 145.053 30.6484 145.358 29.8609C145.653 29.0969 145.859 28.225 145.916 26.95C145.972 25.6703 145.986 25.2625 145.986 22.0047C145.986 18.7469 145.972 18.3391 145.916 17.0594C145.859 15.7844 145.653 14.9078 145.358 14.1484C145.062 13.3516 144.655 12.6813 143.984 12.0156C143.319 11.35 142.648 10.9375 141.861 10.6328C141.097 10.3375 140.225 10.1313 138.95 10.075C137.666 10.0141 137.258 10 134 10Z" fill="#45726C" />
                                <path d="M134 15.8359C130.597 15.8359 127.836 18.5969 127.836 22C127.836 25.4031 130.597 28.1641 134 28.1641C137.403 28.1641 140.164 25.4031 140.164 22C140.164 18.5969 137.403 15.8359 134 15.8359ZM134 25.9984C131.792 25.9984 130.002 24.2078 130.002 22C130.002 19.7922 131.792 18.0016 134 18.0016C136.208 18.0016 137.998 19.7922 137.998 22C137.998 24.2078 136.208 25.9984 134 25.9984Z" fill="#45726C" />
                                <path d="M141.847 15.5924C141.847 16.3893 141.2 17.0314 140.408 17.0314C139.611 17.0314 138.969 16.3846 138.969 15.5924C138.969 14.7955 139.616 14.1533 140.408 14.1533C141.2 14.1533 141.847 14.8002 141.847 15.5924Z" fill="#45726C" />
                            </g>
                            <rect x="168.5" y="0.5" width="43" height="43" rx="21.5" stroke="#45726C" />
                            <g clipPath="url(#clip2_1_443)">
                                <path d="M190 10C183.372 10 178 15.3719 178 22C178 27.0859 181.164 31.4266 185.627 33.175C185.523 32.2234 185.425 30.7703 185.669 29.7344C185.889 28.7969 187.075 23.7719 187.075 23.7719C187.075 23.7719 186.714 23.0547 186.714 21.9906C186.714 20.3219 187.68 19.075 188.884 19.075C189.906 19.075 190.403 19.8438 190.403 20.7672C190.403 21.7984 189.747 23.3359 189.409 24.7609C189.128 25.9562 190.009 26.9313 191.186 26.9313C193.319 26.9313 194.959 24.6812 194.959 21.4375C194.959 18.5641 192.897 16.5531 189.948 16.5531C186.536 16.5531 184.53 19.1125 184.53 21.7609C184.53 22.7922 184.928 23.8984 185.425 24.4984C185.523 24.6156 185.537 24.7234 185.509 24.8406C185.42 25.2203 185.214 26.0359 185.177 26.2C185.125 26.4203 185.003 26.4672 184.773 26.3594C183.273 25.6609 182.336 23.4719 182.336 21.7094C182.336 17.9219 185.088 14.4484 190.263 14.4484C194.425 14.4484 197.659 17.4156 197.659 21.3813C197.659 25.5156 195.053 28.8438 191.434 28.8438C190.22 28.8438 189.077 28.2109 188.683 27.4656C188.683 27.4656 188.083 29.7578 187.938 30.3203C187.666 31.3609 186.934 32.6688 186.447 33.4656C187.572 33.8125 188.762 34 190 34C196.628 34 202 28.6281 202 22C202 15.3719 196.628 10 190 10Z" fill="#45726C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_443">
                                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                                </clipPath>
                                <clipPath id="clip1_1_443">
                                    <rect width="24" height="24" fill="white" transform="translate(122 10)" />
                                </clipPath>
                                <clipPath id="clip2_1_443">
                                    <rect width="24" height="24" fill="white" transform="translate(178 10)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl leading-[40px]">Quick Links</h1>
                    <NavLink to={`/`} className="pt-2">Shop</NavLink>
                    <NavLink to={`/`} className="pt-2">About Us</NavLink>
                    <NavLink to={`/`} className="pt-2">Skincare Blog</NavLink>
                    <NavLink to={`/`} className="pt-2">FAQs </NavLink>
                    <NavLink to={`/`} className="pt-2">Shipping & Returns</NavLink>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl leading-[40px]">Contact</h1>
                    <NavLink to={`/`} className="pt-2">Shop</NavLink>
                    <NavLink to={`/`} className="pt-2">About Us</NavLink>
                    <NavLink to={`/`} className="pt-2">Skincare Blog</NavLink>
                    <NavLink to={`/`} className="pt-2">FAQs </NavLink>
                    <NavLink to={`/`} className="pt-2">Shipping & Returns</NavLink>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl leading-[40px]">Product</h1>
                    <NavLink to={`/`} className="pt-2">Shop</NavLink>
                    <NavLink to={`/`} className="pt-2">About Us</NavLink>
                    <NavLink to={`/`} className="pt-2">Skincare Blog</NavLink>
                    <NavLink to={`/`} className="pt-2">FAQs </NavLink>
                    <NavLink to={`/`} className="pt-2">Shipping & Returns</NavLink>
                </div>

            </div>
            <div className="flex justify-end relative px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px] pb-3 lg:pb-5">
                <div className="h-[56px] w-[56px] bg-[#45726C] flex justify-center items-center">
                    <svg width="25" height="37" viewBox="0 0 25 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 37L11.9999 37L12.1691 5C10.2795 14.5 3.63673 16.786 1.89146e-05 17L1.90656e-05 15.2729C3.65609 15.0576 11.294 11.7313 12.1691 -1.12171e-06L12.5 0.0247639L12.9999 -1.04907e-06C13.875 11.7313 21.3439 14.7846 24.9999 15L24.9999 17C21.5133 16.7948 14.9235 14.3841 12.9999 5L12.9999 37Z" fill="white" />
                    </svg>

                </div>
            </div>
            <div className="border-t-[1px] border-[#45726C]">
                <div className="lg:flex justify-between items-center gap-4 py-5 px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]">
                    <h1 className="text-center hidden lg:block">@Glowave 2025. All Rights Reserved</h1>
                    <div className="lg:flex">
                        <div className="flex justify-center lg:justify-end items-center gap-4">
                            <NavLink to={`/`}>Privacy Policy</NavLink>
                            <div className="border border-[#D4D4D4] h-5" />
                            <NavLink to={`/`}>Terms of Use</NavLink>
                        </div>

                        <div className="flex justify-center lg:justify-end items-center gap-4">
                            <div className="border border-[#D4D4D4] h-5 hidden lg:block ml-3" />
                            <NavLink to={`/`}>Sales and Refunds</NavLink>
                            <div className="border border-[#D4D4D4] h-5" />
                            <NavLink to={`/`}>Legal</NavLink>
                        </div>
                    </div>
                    <h1 className="lg:hidden text-center">@Glowave 2025. All Rights Reserved</h1>
                </div>
            </div>



        </div>
    )
}

export default Footer