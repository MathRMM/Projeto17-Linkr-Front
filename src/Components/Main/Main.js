import styled  from 'styled-components';

export default function Main({children}){
    return(
        <MainComponent>
            {children}
        </MainComponent>
    )
}

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-top: 10rem;

  h2 {
    margin-top: 15rem;
    margin-bottom: 4.3rem;

    display: flex;
    align-items: initial;

    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 4.3rem;

    color: #ffffff;
  }

  .publish {
    display: flex;
    padding-top: 1.6rem;
    padding-left: 1.8rem;

    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 0.5rem;

      input {
        width: 50.3rem;
        height: 3rem;

        border: none;
        background: #efefef;
        border-radius: 0.5rem;
      }

      .text {
        margin: 0.5rem 0rem;

        width: 50.2rem;
        height: 6.6rem;

        background: #efefef;
        border-radius: 0.5rem;
      }
    }

    width: 61.1rem;
    height: 20.9rem;

    background-color: #ffffff;
  }

  img {
    width: 5.3rem;
    height: 5.3rem;

    border-radius: 2.65rem;

    margin-right: 1.7rem;
  }
`;
