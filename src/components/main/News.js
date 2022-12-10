import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

function News() {

  const Members = useSelector((store) => store.memberReducer.members);

  const getLocalData = () => {
    const dummyPosts = [
      {title: 'Hello5', content: 'Here comes description in details'},
      {title: 'Hello4', content: 'Here comes description in details'},
      {title: 'Hello3', content: 'Here comes description in details'},
      {title: 'Hello2', content: 'Here comes description in details'},
      {title: 'Hello1', content: 'Here comes description in details'},
    ];

    const data = localStorage.getItem('post');

    if(data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }  
  };

  // const [Posts, setPosts] = useState([]);
  const [Posts] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem('post', JSON.stringify(Posts));
  }, []);

  return(

    <main id="news" className='myScroll b-line'>
      <h2>● FEATURED NEWS</h2>
      {Posts.map((post, idx) => {
        if(idx >= 5) return; // 5개의 인덱스만 가져다 달라는 의미

        return(
          <article key={idx}>
            <div className="random-img">
              <img src="https://picsum.photos/200/300?grayscale" alt="" />
            </div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        );
      })}

      {/* {
        Members.map((member, idx) => {
          // news에서 member 2명의 값만 전달되게 하기
          if(idx >= 2) return;
          return(
            <p key={member.name}>{member.name}</p>
          )
        })
      } */}
    </main>
  );
}

export default News;