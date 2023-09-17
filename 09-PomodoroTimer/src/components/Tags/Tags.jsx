import styled from "styled-components"

const Tags = () => {
  return (
    <TagsContainer>
        {["Work", "Short Break", "Long Break"].map((tag,i) =><Tag key={i}>
            {tag}
        </Tag>)}
    </TagsContainer>
  )
}

export default Tags;


const TagsContainer = styled.div`
    background: #08002b;
    height: 5rem;
    width: 40rem;
    margin: 0 auto;
    border-radius: 5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const Tag = styled.button`
    all: unset;
    height: 4rem;
    text-align: center;
    border-radius: 5rem;
    flex: 1;
    background: #b85600;
    font-size: 2rem;
`;
