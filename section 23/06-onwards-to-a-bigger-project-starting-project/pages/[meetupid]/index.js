import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      title="A First Meetup"
      address="Address"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps() {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        title: "A First Meetup",
        address: "Address",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
