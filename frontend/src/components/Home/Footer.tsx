import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex items-center  gap-2">
            <img alt="logo" src={Logo} className="h-6 w-6" />
            <span className="font-bold text-secondary-500">CareClub</span>
          </div>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa
            dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis
            tristique.
          </p>
          <p>© CareClub. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
