import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { baseImgUrl } from "../constants";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../components/ActorCard";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          {/* top area*/}
          <div className="relative h-[20vh]">
            <img
              className="object-cover h-full w-full"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />
            <div className="absolute bg-black inset-0 grid place-items-center bg-opacity-50">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </div>

          {/* middle area*/}

          <div className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title={"Categories"} data={movie.genres} />
              <DetailDisplay
                title={"Spoken Languages"}
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title={"Producer Companies"}
                data={movie.production_companies}
              />
              <DetailDisplay
                title={"Production Countries"}
                data={movie.production_countries}
              />
            </div>
            <div>
              <p>{movie.overview}</p>
              <p>
                <span>Budget</span>
                <span className="text-green-500 ms-2">
                  ${millify(movie.budget)}
                </span>
              </p>
              <p>
                <span>Revenue</span>
                <span className="text-green-500 ms-2">
                  ${millify(movie.revenue)}
                </span>
              </p>
            </div>
          </div>

          {/* bottom */}

          <Splide
            options={{
              autoWidth: true,
              gap: "10px",
              pagination: false,
              lazyLoad: true,
            }}
          >
            {movie.credits.cast.map((actor) => (
              <SplideSlide>
                <ActorCard actor={actor} key={actor.id} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
