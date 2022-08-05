import styled from "styled-components";

export const MainContainer = styled.div`
    .card {
        background: var(--bg-cards);

        border-radius: 20px;
        box-shadow: 2px 2px 10px rgba(0,0,0, 0.2);

        padding: 2rem;
        text-align: left;

        margin-bottom: 1.875rem;
        cursor: pointer;
    }
    .projects {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recentProjects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 1.875rem;


        .recentList {
            main {
                margin-bottom: 2rem;
            }

            header {
            display: flex;
            flex-direction: row;

            align-items: center;
            gap: 1rem;
            margin-bottom: 1.375rem;
        }

            footer {
                display: flex;
                justify-content: space-between;

                .itemsRight {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    span {
                        display: flex;
                        
                        width: 15px;
                        height: 15px;
                        background: aqua;

                        border-radius: 50%;
                        border: 2px solid #837E9F;
                    }
                }
                .itemsLeft {
                    display: flex;
                    gap: 1rem;

                    .styledItems {
                        display: flex;
                        gap: 0.5rem;
                    }
                }
            }
        }
    }

    .miniList {
        display: flex;
        flex-direction: column-reverse;
        
        .recentItem {
            display: grid;
            grid-template-columns: 150px 1fr;

            .avatar {
                img {
                    display: flex;
    
                    width: 128px;
                    height: 128px;
                    border-radius: 50%;
    
                    background: crimson;
                }
            }
    }
        .infoSection {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            header {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 0.5rem;
                
                time {
                    font-size: 0.875rem;
                }
            }

            section {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                .tags {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .miniList {
            display: flex;
            flex-direction: column;
        }
        .recentProjects {
            grid-template-columns: 1fr;
            gap: 0;
        }
        .recentItem {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;

            .avatar {
                img {
                    margin-bottom: 20px;
                }
            }
        }
    }
`;

export const Title = styled.h2`
        font-size: 1.125rem;
`;