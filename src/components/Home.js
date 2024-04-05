import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

const Home = () => {
  return (
    <Container>
      <Background>
        <img src="/images/background.png" />
      </Background>
      <Fade bottom>
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
            Eğitim teknolojileri pazarı, hızla büyüyen bir sektör haline
            gelmiştir ve bu alanda MENTORAS öncü bir konumdadır. Gelişmiş yapay
            zeka teknolojisiyle donatılmış olan MENTORAS , öğrencilerin deneme
            sınavlarını takip ederek başarılarını artırmaya yönelik benzersiz
            bir çözüm sunar. Eğitimdeki bu artan talep, MENTORAS gibi yenilikçi
            ve etkili çözümlere olan ihtiyacı da artırmaktadır. MENTORAS ,
            pazarın dinamiklerine uyum sağlayarak eğitimdeki geleceği
            şekillendirmeye devam ediyor.
          </p>
          <br />
          <br />
          <Tick>
            <Icon1>
              <p>
                Öğrencinin performansını izler ve eksik konuları belirleyerek
                özelleştirilmiş öneriler sunar
              </p>
              <p>
                Yapay zeka teknolojisi sayesinde öğrencilere sürekli ve anında
                geri bildirim sağlar, verimliliği arttırır.
              </p>
              <p>
                Otomatik olarak öğrenci performansını izler ve gelişimi
                raporlar, zaman ve emek tasarrufu sağlar.
              </p>
              <p>
                Öğrencinin güçlü ve zayıf yönlerini belirler, öğrenciye özel
                rehberlik sunar.
              </p>
            </Icon1>
            <img src="/images/mentoras2.png" />
          </Tick>
        </About>
      </Fade>
      <Fade bottom>
        <SSS>
          <h2>SSS - SIKÇA SORULAN SORULAR</h2>
          <br />
          <br />
          <h4>Mentoras.ai nedir?</h4>
          <FAQ1>
            <p></p>
          </FAQ1>
        </SSS>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  justify-content: space-between;
  position: relative;
  display: block;
  color: whitesmoke;
`;

const Background = styled.div`
  left: 0px;

  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const Header = styled.div``;

const Section = styled.div``;

const About = styled.div``;

const Tick = styled.div`
  display: flex;
  margin-right: 250px;
  justify-content: space-between;
  align-items: center;
`;

const Icon1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
`;

const SSS = styled.div`
  margin-top: 200px;
`;

const FAQ1 = styled.div``

export default Home;
