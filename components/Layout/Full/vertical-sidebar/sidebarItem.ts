import {
	LayoutDashboardIcon,
	BorderAllIcon,
	AlertCircleIcon,
	CircleDotIcon,
	BoxMultiple1Icon,
	LoginIcon,
	MoodHappyIcon,
	ApertureIcon,
	UserPlusIcon,
} from "vue-tabler-icons";

export interface menu {
	header?: string;
	title?: string;
	to?: string;
	chip?: string;
	BgColor?: string;
	chipBgColor?: string;
	chipColor?: string;
	chipVariant?: string;
	chipIcon?: string;
	children?: menu[];
	disabled?: boolean;
	type?: string;
	subCaption?: string;
}

const sidebarItem: menu[] = [
	{
		title: "College",

		to: "/college",
	},
	{
		title: "Student",

		to: "/student",
	},
	{
		title: "Attendance",

		to: "/attendance",
	},
	{
		title: "Exam",

		to: "/exam",
	},
	{
		title: "Subject",

		to: "/subject",
	},
    {
		title:"Internal Assessment",

		to: "/assessment",
	},
	{
		title: "Mark",

		to: "/mark",
	},
	{
		title: "Questions",

		to: "/question",
	},
	 

	{ header: "Auth" },
	{
		title: "Login",
		to: "/",
	},
	// {
	// 	title: "Register",
	// 	to: "/auth/register",
	// },
];

export default sidebarItem;
