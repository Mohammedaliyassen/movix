import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.scss'
import p from './p.jpg'
import useFetch from '../../../hooks/useFetch'
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
function HeroBanner() {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home); // بنجيب البيانات من ملف App.js/fetchApiConfig()
    console.log(url)//تقدر تشوف البيانات ال جاية من السطر ده و البيانات دي عبارة عن الرابط الاساسي للصور 
    const { data, loading } = useFetch("/movie/upcoming");// البيانات دي الافلام و ال هنجيب منها كل المعلومات ال هنحتاجها
    // زي رابط الصورة و اسم الفلم و كل حاجة تقريبا و رابط الصورة هنا رابط تكميلي بيتضاف علي الاساسي و بيجيب الصورة

    useEffect(() => {
        const bg =
            url.backdrop +//معاه انه يجيب رقم عشوائي  [Math.floor(Math.random() * 20)] الجزء ده
            data?.results[Math.floor(Math.random() * 20)]?.backdrop_path; // بعد ما يجيب رقم عشوائي بيجيب منه رابط الصورة التكميلي
        setBackground(bg);//و بنحط هنا الصورة ال جات 
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }
    return (
        <div className="heroBanner">
            {!loading &&
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            }
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>

                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}
export default HeroBanner; 