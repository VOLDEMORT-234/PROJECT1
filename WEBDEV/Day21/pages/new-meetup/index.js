import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import useRouter from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter;

  async function addMeetupHandler(enteredMeetupData) {
    // console.log(enteredMeetupData);
    // fe
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      {" "}
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a hugelist higly active React meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
