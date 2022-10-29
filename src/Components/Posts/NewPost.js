import { useState } from "react";
import styled from "styled-components";

import { upPost } from "../../Services/Posts/post";

export default function NewPost({ user, reload, setReload, setPage, setPosts }) {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');

<<<<<<< HEAD
  function handleForm(e) {
    e.preventDefault()
    setLoading(true)
    console.log('aa')
    upPost({
      url: link,
      comment: text
    }, user.token).then(e => {
      setPage(1)
      setPosts([])
      setReload(!reload)
      setLoading(false)
    })
  }

  return (
=======
    function handleForm(e){
        e.preventDefault()
        setLoading(true)
        upPost({
            url: link,
            comment: text
        }, user.token).then(e => {
            setPage(1)
            setPosts([])
            setReload(!reload)
            setLoading(false)
        })
    }
    
    return (
>>>>>>> feat/users
        <div className="publish">
          <img src={user.image} alt='Imagem do usuario' />
          <div className="inputs">
            <form>
              <p>What are you going to share today?</p>
              <input
                placeholder="http://..."
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <div>
                <input
                  className="text"
                  type="text"
                  placeholder="Awesome article about #javascript"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              {loading ? (
                <button>Loading ...</button>
              ) : (
                <button onClick={handleForm}>Publish</button>
              )}

            </form>
          </div>
        </div>
       
  );
}

const Container = styled.div`
  .teste {
    display: flex;
    gap: 2.5rem;
  }
`;
