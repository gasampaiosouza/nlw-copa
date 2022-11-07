import Image from 'next/image';

import Logo from '../assets/logo.svg';
import AppPreviewImage from '../assets/app-nlw-copa-preview.png';
import usersAvatarExampleImage from '../assets/users-avatar-example.png';

function Page() {
  return (
    <div>
      <main>
        <Image src={Logo} alt="NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div></div>
      </main>

      <Image
        src={AppPreviewImage}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
        quality={100}
      />
    </div>
  );
}

export default Page;
