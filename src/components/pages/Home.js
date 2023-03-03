import styled from '@mui/material/styles/styled';

export const Container = styled('div')({
 marginTop: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const Title = styled('h1')({
  fontWeight: 500,
  fontSize: 48,
  textAlign: 'center',
});


export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to homepage &#127968;
      </Title>
    </Container>
  );
}
