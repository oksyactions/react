
import userEvent from "@testing-library/user-event";
import styles from "./Profile.module.css";


const Profile = (props)=> {

    let user = props.function();
  
  
	return (
		<div className="row">
			<div className="col-sm-3">
				<img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" width={"100%"}/>
			</div>
			<div className="col-sm-9">
				<h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
				<h2 className={styles.about}>{user.about}</h2>
				<p>E-mail: {user.email}</p>
				<p>Id: {user.id}</p>
				<p className={styles.paragraph}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam nesciunt earum
					similique mollitia nam numquam consequatur necessitatibus facere eaque aliquid, sed
					laborum accusantium corrupti enim debitis? Fugit, fugiat voluptatum!
				</p>
			</div>
		</div>
	);
};

export default Profile;