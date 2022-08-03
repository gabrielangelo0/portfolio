import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: 0 auto;
    text-align: center;

    display: grid;
    grid-template-columns: 348px 1fr;

    gap: 3.75rem;

    padding: 2.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        margin: 0 auto;
        padding: 2rem 1rem;

    }
`;