import MeetupList from "../components/meetups/MeetupList";
const Dummy_meetups = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    address: "address",
    description: "This is a first image",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    address: "address",
    description: "This is a second image",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(){
  return {
    props:{
      meetups:Dummy_meetups
    },
    revalidate:36000
  }
}

export default HomePage;
