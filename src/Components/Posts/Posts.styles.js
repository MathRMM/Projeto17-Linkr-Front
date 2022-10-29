import styled from "styled-components";

export const Container = styled.div`
  .post {
    width: 61.1rem;
    min-height: 15rem;
    position: relative;
    margin-bottom: 2.9rem;
    padding: 1.6rem 1.8rem 2rem 1.8rem;

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;

    background-color: #171717;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;

    .top {
      display: flex;
      position: relative;

      Img {
        width: 5rem;
        height: 5rem;

        background: url(image);
        border-radius: 2.65rem;
      }
    }

    .infor {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.7rem;

      h3 {
        font-size: 1.9rem;
        cursor: pointer;

        color: #ffffff;
      }

      p {
        font-size: 1.7rem;
        color: #b7b7b7;
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          margin-left: 10%;
        }
      }
    }

    .editDelete {
      display: flex;
      gap: 8px;
      position: absolute;
      right: 0;
    }

    .likeComment {
      position: absolute;
      top: 90px;
      left: 2.3rem;
      color: #ffffff;
      text-align: center;
      width: max-content;
    }

    .dataLink {
      width: 50.3rem;
      height: 100%;
      cursor: pointer;
      border: 0.1rem solid #4d4d4d;
      border-radius: 1.1rem;
      margin-left: 7rem;
      display: flex;
      justify-content: space-between;

      .postContext {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        margin-left: 2rem;

        .title {
          font-size: 1.6rem;
          color: #cecece;
        }

        .description {
          font-size: 1.1rem;
          color: #9b9595;
        }

        .link {
          line-height: 1.3rem;
          color: #cecece;
        }
      }

      .postImg {
        height: 15.5rem;
      }

      .postImg img {
        height: 15.5rem;
        width: 15.4rem;
        border-radius: 0rem 1rem 1rem 0rem;
        margin: 0 0 0 2.2rem;
        object-fit: cover;
        object-position: center;
      }

      .onlyLink {
        font-size: 20px;
        line-height: 150%;
        color: blue;
        margin-left: 1rem;
      }
    }
  }
`;
