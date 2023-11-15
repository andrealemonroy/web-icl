import React, { useState } from 'react';
import { Key } from 'react';
import { useGetNewsQuery } from '../../redux/reduxQuery/news';
import { NewsType } from '../../utils/types';
import { News } from '../../components/News';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { Button } from '../../components/Button';

export default function Noticias() {
  const { data: newsData, error, refetch } = useGetNewsQuery('autorizado=1&activo=1');
  
  // Initial count of news items to show
  const INITIAL_COUNT = 5;
  
  // State to keep track of shown news count
  const [shownCount, setShownCount] = useState(INITIAL_COUNT);
  
  // Handler to show more news items
  const handleShowMore = () => {
    setShownCount(prevCount => prevCount + 5); // Show 5 more news items
  };

  return (
    <Layout>
      <SectionBanner
        title="Todas las noticias"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption='Noticias'
      />
      <div className="flex flex-col gap-8 justify-center pt-12 w-9/12 mx-auto pb-12">
        {newsData?.slice(0, shownCount).map((news: NewsType, index: Key | null | undefined) => (
          <News key={index} {...news} />
        ))}
      </div>
      {/* "Ver más" button to show more news items */}
      {newsData && shownCount < newsData.length && (
        <div className="flex justify-center my-6 w-48 mx-auto">
          <Button onClick={handleShowMore}>Ver más noticias</Button>
        </div>
      )}
    </Layout>
  );
}
