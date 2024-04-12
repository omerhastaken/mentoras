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
          <h1>SSS - SIKÇA SORULAN SORULAR</h1>
          <br />
          <br />
          <h2>Mentoras Technology nedir ve ne tür hizmetler sunuyorsunuz?</h2>
          <p>
            Mentoras Technology, teknolojik çalışmalar yürüten bir şirkettir.
            Yazılım geliştirme, yapay zeka, veri bilimi, mobil uygulama
            geliştirme ve diğer teknoloji odaklı çözümlerle müşterilerimize
            hizmet vermekteyiz.
          </p>
          <br />
          <br />
          <h2>
            Hangi teknolojilerde uzmanlaşıyorsunuz ve hangi endüstrilere hizmet
            veriyorsunuz?
          </h2>
          <p>
            Uzmanlık alanlarımız arasında yazılım geliştirme, yapay zeka, veri
            bilimi, bulut bilişim, mobil uygulama geliştirme bulunmaktadır.
            Çeşitli endüstrilere, özellikle eğitim gibi sektörlere hizmet
            sunmaktayız.
          </p>
          <br />
          <br />
          <h2>Mentoras Technology ile nasıl iletişim kurabilirim?</h2>
          <p>
            Bizimle iletişime geçmek için iletişim sayfamızdaki formu
            doldurabilir veya doğrudan e-posta yoluyla bize ulaşabilirsiniz:
            mentorasai@gmail.com
          </p>
          <br />
          <br />
          <h2>
            Projelerinizde hangi yaklaşımı benimsiyorsunuz ve müşteri
            memnuniyeti için nasıl bir strateji izliyorsunuz?
          </h2>
          <p>
            Projelerimizde genellikle bir ekip yaklaşımını benimseriz.
            Müşterilerimizle yakın işbirliği yapar, ihtiyaçlarını anlarız ve
            onlara özelleştirilmiş çözümler sunarız. Müşteri memnuniyetini
            sağlamak için ise proje sürecinin her aşamasında şeffaf iletişim ve
            düzenli geri bildirimler sağlarız.
          </p>
          <br />
          <br />
          <h2>
            Mentoras Technology'de çalışan uzmanlar kimlerdir ve hangi alanlarda
            uzmanlık sahibidirler?
          </h2>
          <p>
            Ekip üyelerimiz, sektörün önde gelen uzmanlarıdır ve çeşitli
            teknoloji alanlarında uzmanlaşmışlardır. Her biri geniş deneyime ve
            birçok başarılı projeye sahiptir. Detaylı bilgi için "Ekibimiz"
            sayfasına göz atabilirsiniz.
          </p>
          <br />
          <br />
          <h2>
            Referanslarınız veya önceki projeleriniz hakkında daha fazla bilgi
            alabilir miyim?
          </h2>
          <p>
            Referanslarımız ve önceki projelerimiz hakkında daha fazla bilgi
            almak için lütfen bizimle iletişime geçin. Size en uygun
            referansları paylaşmaktan memnuniyet duyarız.
          </p>
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

  h2 {
    font-weight: 500;
  }
`;

const Mentoras = styled.div``;

export default Home;
