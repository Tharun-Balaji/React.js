

export default function Banner(){

    /**
     * <div class="flex justify-center items-end h-[70vh]  bg-cover bg-no-repeat" style="background-image: url(&quot;https://image.tmdb.org/t/p/original/tsDoiLwZyAbYewoIUDJKk1SJzTF.jpg&quot;);"><div class="text-white py-1 bg-slate-950/50 w-full text-center">Lisa Frankenstein</div></div>
     */

    return (
        <div 
            className="w-screen h-[70vh] bg-cover relative"
            style={ 
                { backgroundImage: `url(https://image.tmdb.org/t/p/original/tsDoiLwZyAbYewoIUDJKk1SJzTF.jpg)` }
            }
        >
            <div 
                className=" w-[100vw] text-white bg-slate-950/50  h-[8%] top-[92%] bottom-0 absolute text-center py-2" 
            >
               <p>Movie Name</p>
            </div>
        </div>
    );
}