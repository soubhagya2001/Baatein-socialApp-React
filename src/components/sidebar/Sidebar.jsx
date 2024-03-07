import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sideWrapper">
         <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Feed</span>
            </li>

            <li className="sidebarListItem">
                <ChatIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
            </li>

            <li className="sidebarListItem">
                <VideoCameraBackIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Videos</span>
            </li>

            <li className="sidebarListItem">
                <GroupsIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Groups</span>
            </li>

            <li className="sidebarListItem">
                <BookmarksIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
            </li>

            <li className="sidebarListItem">
                <HelpIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Questions</span>
            </li>

            <li className="sidebarListItem">
                <WorkIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Jobs</span>
            </li>

            <li className="sidebarListItem">
                <EmojiEventsIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Events</span>
            </li>

            <li className="sidebarListItem">
                <MenuBookIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Courses</span>
            </li>

         </ul>

         <button className="sidebarButton">Show More</button>
         <hr className="sidebarHr" />

         <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img src="assets/people/2.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Joana Dar</span>
            </li>
         </ul>
        </div>
    </div>
  )
}
