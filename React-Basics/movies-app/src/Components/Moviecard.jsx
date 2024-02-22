
export default function MovieCard(
  {
    id,
    title,
    poster_path,
    Handle_Add_to_Watch_list,
    Handle_Remove_from_Watch_list,
    Watch_list
  }
) {
    return(
        <div
            className="flex flex-col hover:scale-[0.9] duration-300 justify-between items-end h-80 w-56 rounded-lg overflow-hidden bg-cover bg-no-repeat relative"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
        >
        {
          Watch_list.includes(id) ?
            <div
              className="text-xl m-2 rounded-lg cursor-pointer p-2 bg-slate-950/50"
              onClick={
                function(){
                  Handle_Remove_from_Watch_list(id);
                }
              }
            >
              &#10060;
            </div>
             :
            <div
              className="text-xl m-2 rounded-lg cursor-pointer p-1 bg-slate-950/50"
              onClick={
                function(){
                  Handle_Add_to_Watch_list(id);
                }
              }
            >
              &#128525;
            </div>
        }
          <div className="text-white py-0.5 bg-slate-950/50 w-full text-center">
            {title}
          </div>
        </div>
    )
}