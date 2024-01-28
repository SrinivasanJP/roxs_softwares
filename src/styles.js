const homeStyle = {
    root:"w-screen h-screen bg-[url('https://firebasestorage.googleapis.com/v0/b/roxssoftware.appspot.com/o/backSpace.jpg?alt=media&token=f8fdd6e5-c240-4a2d-81cc-b72bad0f69b9')] shadow-[inset_0_0_100px_100px_#0c1015] bg-cover bg-cover bg-[center_right_45em] md:bg-center flex md:justify-end justify-center",
    p: "text-white text-xl text-left my-5",
}
const we_are = {
    root:"w-screen h-screen flex justify-center items-center relative flex-col md:flex-row",
    bPlanet:'absolute w-[30%] -z-1 animate-spinOrbit right-0 lg:w-[20%] -bottom-28',
    p:'text-white my-5 text-xl',
}
const what_we_do = {
    root:"w-screen h-screen flex items-center  bg-cover bg-cover bg-[center_right_45em] md:bg-center -z-10 text-white bg-[url('https://firebasestorage.googleapis.com/v0/b/roxssoftware.appspot.com/o/ship.jpg?alt=media&token=424209b6-b992-43be-9b1b-c442fea8bc4d')] justify-start sm:shadow-[inset_0_0_100px_100px_#0c1015] shadow-[inset_0_0_100px_40px_#0c1015]",
    p:'text-white my-5 text-xl sm:text-center',
    container:' backdrop-blur-md sm:mx-20 mx-10 backdrop-filter bg-opacity-70 rounded-2xl z-10 shadow-gray-700 shadow-inner flex justify-center p-10 flex-col sm:items-end',
}
const common = {
    Buttonblue:"text-white text-left mt-5 w-fit px-5 py-2 rounded-full bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] animate-pulse",
    textNabula: 'bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent font-extrabold text-3xl'
}
const about = {
    root:"text-gray-100 p-10 md:w-[60%] mx-auto",
    p:" text-justify mb-5",
}
export {homeStyle,common,we_are, what_we_do, about}