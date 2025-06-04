import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { UploadSimple, FileText, MagicWand, DownloadSimple, Upload, Download } from 'phosphor-react';


const Home = () => {
  return (
    <section className="bg-background h-screen flex justify-center items-center  text-text-primary py-24 px-4 sm:px-8 lg:px-8">
        <div>

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="md:text-6xl text-primary italic sm:text-5xl font-bold leading-tight">
          Enhance Your Resume with AI.
        </h1>
       <p className="mt-6 text-lg md:max-w-2xl flex mx-auto sm:text-xl text-text-secondary">
  Get personalized suggestions to tailor your resume for any job description.
  Highlight the right skills, fix weak spots, and boost your chances of landing interviews — all powered by cutting-edge AI.
</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/upload">
    <Button variant="primary">Enhance My Resume</Button>
  </Link>

  <Link to="/about">
    <Button variant="secondary">Learn More</Button>
  </Link>
</div>
      </div>
      <div className="px-4 sm:px-8 lg:px-8 mt-16">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <Card
    title={<Upload className="w-10 h-10 text-primary " />}
    description="Upload your existing resume in PDF or DOCX format. We’ll extract the content for analysis."
  />
  <Card
    title={<FileText className="w-10 h-10 text-primary " />}
    description="Paste a job description or URL so our system knows what role you’re targeting."
  />
  <Card
    title={<MagicWand className="w-10 h-10 text-primary " />}
    description="See personalized insights to improve your resume: keyword matches, grammar fixes, and more."
  />
  <Card
    title={<Download className="w-10 h-10 text-primary " />}
    description="Download your improved resume instantly in your preferred format — ready to apply!"
  />
</div>


    </div>
        </div>

    </section>
  );
};

export default Home;
