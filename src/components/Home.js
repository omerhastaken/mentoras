import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";

const Home = () => {
  return (
    <Container>
      <Header>
        <h4>Mentoras.ai: Gelecek Burada</h4>
      </Header>
      <Section>
        <h2>Hayalinizdeki Rehberlik Sistemi Artık Parmaklarınızın Ucunda</h2>
        <br />
      </Section>
      <About>
        <h3>Hakkımızda</h3>
        <p>
          Eğitim teknolojileri pazarı, hızla büyüyen bir sektör haline gelmiştir
          ve bu alanda MENTORAS öncü bir konumdadır. Gelişmiş yapay zeka
          teknolojisiyle donatılmış olan MENTORAS , öğrencilerin deneme
          sınavlarını takip ederek başarılarını artırmaya yönelik benzersiz bir
          çözüm sunar. Eğitimdeki bu artan talep, MENTORAS gibi yenilikçi ve
          etkili çözümlere olan ihtiyacı da artırmaktadır. MENTORAS , pazarın
          dinamiklerine uyum sağlayarak eğitimdeki geleceği şekillendirmeye
          devam ediyor.
        </p>
        <br />
        <br />
        <Icons>
          <SchoolIcon style={{ fontSize: 100 }} />
          <p>
            Öğrencinin güçlü ve zayıf yönlerini belirler, öğrenciye özel
            rehberlik sunar.
          </p>
        </Icons>
      </About>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
`;

const Header = styled.div``;

const Section = styled.div``;

const About = styled.div``;

const Icons = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 150px;
`;

export default Home;
