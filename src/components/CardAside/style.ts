import styled from "styled-components";

export const CardContainer = styled.div`
    .card {
        background: var(--bg-cards);

        border-radius: 20px;
        box-shadow: 2px 2px 10px rgba(0,0,0, 0.2);

        padding: 2rem;
        text-align: left;
        margin-bottom: 1.875rem;
        cursor: pointer;
    }
    .cardProfile {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        h2 {
            font-size: 23px;
            line-height: 33px;
        }
        small {
            font-size: 13px;
            font-weight: 300;
        }
        img {
        display: flex;
        background: crimson;

        width: 128px;
        height: 128px;
        border-radius: 50%;
        border: 2px solid #00FF00;
        margin-bottom: 1.875rem;
    }
    }
    .informationsCard {
        ul {
            display: flex;
            gap: 1.25rem;

            margin-bottom: 1.2rem;
        }
    }
    .skills {
        header {
            margin-bottom: 1.25rem;
        }
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            text-align: center;
            font-size: 0.625rem;
            color: #000;
            font-weight: 700;

            gap: 0.93rem;

            li {
            display: flex;
            justify-content: center;
            align-items: center;

            background: var(--bg-techs);
            border-radius: 30px;
            padding: 0.43rem ;
            }
        }
    }
`;