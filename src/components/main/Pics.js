import { useSelector } from 'react-redux';

function Pics({ Scrolled, start }) {
  const Pics = useSelector(store => store.flickrReducer.flickr);
  const position = Scrolled - start || 0;
  // position => 전체 스크롤 거리값에서 해당 섹션요소의 세로 위치값을 뺀것으로, 처음 섹션의 초입에는 0이된다.
  // console.log(position);
  return(
    <main id="pics" className='myScroll b-line'>
      <p style={{ left: 100 + position, }}>PHOTOS</p>
      <h3 style={{ left: 100 + position / 2, }}>PHOTOS</h3>
      <ul> 
        {Pics.map((pic, idx) => {
          if(idx >= 5) return;
          return (
            <li key={pic.id}>
              <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} />
            </li>
          )
        })}
      </ul>
    </main>
  );
}

export default Pics;