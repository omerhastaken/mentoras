import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import "./Home.css"

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
          <Icon>
            <SchoolIcon style={{ fontSize: 100 }} />
            <p>
              Öğrencinin güçlü ve zayıf yönlerini belirler, öğrenciye özel
              rehberlik sunar.
            </p>
          </Icon>
          <Icon1>
            <ComputerIcon style={{ fontSize: 100 }} />
            <p>
              Yenilikçi yapay zeka teknolojisini kullanarak eğitimde bir devrim
              yaratır.
            </p>
          </Icon1>
          <Icon2>
            <OfflineBoltIcon style={{ fontSize: 100 }} />
            <p>
              Otomatik olarak öğrenci performansını izler ve gelişimi raporlar,
              zaman ve emek tasarrufu sağlar.
            </p>
          </Icon2>
        </Icons>
      </About>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  justify-content: space-between;
`;

const Header = styled.div``;

const Section = styled.div``;

const About = styled.div``;

const Icons = styled.div`
  display: flex;
  max-width: 50%;

`;

const Icon = styled.div`
  display: column;
`;

const Icon1 = styled.div`
  display: column;
`;

const Icon2 = styled.div`
  display: column;
`;

export default Home;
