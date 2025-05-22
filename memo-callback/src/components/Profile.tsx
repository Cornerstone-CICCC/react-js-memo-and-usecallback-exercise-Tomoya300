import { memo } from "react";

type Props = {
    firstname: string;
    lastname: string;
}

const Profile = memo(({ firstname, lastname }: Props) => {
    console.log("Rendered Profile Component");
    return (
        <div>
            <h3>Fullname: {firstname} {lastname}</h3>
        </div>
    )
})

export default Profile;