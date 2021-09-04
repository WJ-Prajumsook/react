import React from "react";
import { Link } from "react-router-dom";
import { activityActive, activityInactive, explorActive, explorInactive, homeActive, homeInactive, instagramLogo, messengerActive, messengerInactive, newPostActive, newPostInactive, profile, saved, settings, switchAccounts } from "../constants/app-constants"

interface NavbarContent {
  menuHandle: (event: React.MouseEvent<HTMLElement>) => void,
  activeMenu: string
};

export const Navbar = ({ menuHandle, activeMenu }: NavbarContent) => {
  return (
    <div className="fixed-top">
      <div className="bg-white border-bottom">
        <div className="header p-3 mx-auto">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <img className="logo-img" src={instagramLogo} alt="" />
            </div>
            <div className="d-none d-sm-block">
              <input type="text" className="border" placeholder="Search" />
            </div>
            <div className="d-flex flex-row">
              <div className="me-4">
                <Link id="home" onClick={menuHandle} to="/">
                  {activeMenu === 'home' ? homeActive : homeInactive}
                </Link>
              </div>
              <div className="me-4">
                <Link id="inbox" onClick={menuHandle} to="/">
                  {activeMenu === 'inbox' ? messengerActive : messengerInactive}
                </Link>
              </div>
              <div className="me-4">
                <Link id="new" onClick={menuHandle} to="/">
                  {activeMenu === 'new' ? newPostActive : newPostInactive}
                </Link>
              </div>
              <div className="me-4">
                <Link id="explore" onClick={menuHandle} to="/">
                  {activeMenu === 'explore' ? explorActive : explorInactive}
                </Link>
              </div>
              <div className="dropdown me-4">
                <div onClick={menuHandle} className="pointer-menu" data-bs-toggle="dropdown" aria-expanded="false" id="activity">
                  {activeMenu === 'activity' ? activityActive : activityInactive}
                </div>
                <div className="dropdown-menu activity-menu" aria-labelledby="activity">
                  <div className="p-3">
                    <div className="d-flex flex-column">
                      <div className="mb-3">
                        <strong className="text-bold">Today</strong>
                      </div>
                      {
                        activityList.map((item) => {
                          return (<div className="d-flex flex-row justify-content-between align-items-center mb-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="me-3">
                                <img className="rounded-circle" src={item.avatar} alt="" width="32" height="32" />
                              </div>
                              <div className="text-grey">
                                {item.activity}
                              </div>
                            </div>
                            <div className="border p-2 rounded">
                              <strong className="text-bold">{item.action}</strong>
                            </div>
                          </div>)
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <img onClick={menuHandle} className="rounded-circle pointer-menu" src="./images/avatar/avatar.jpg" alt="" width="26" height="26" id="profile" data-bs-toggle="dropdown" aria-expanded="false" />
                <ul className="dropdown-menu" aria-labelledby="profile">
                  {
                    profileDropdownItem.map((item) => {
                      return <li key={item.title} className="mb-2">
                        <Link to="" className="dropdown-item">
                          <div className="d-flex flex-row">
                            <div className="me-2">{item.icon}</div>
                            <div>{item.title}</div>
                          </div>
                        </Link>
                      </li>
                    })
                  }
                  <li><hr /></li>
                  <li className="mt-1">
                    <Link onClick={menuHandle} to="" id="logout" className="dropdown-item">Log out</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const profileDropdownItem = [
  {
    icon: profile,
    title: 'Profile'
  },
  {
    icon: saved,
    title: 'Saved'
  },
  {
    icon: settings,
    title: 'Settings'
  },
  {
    icon: switchAccounts,
    title: 'Switch accounts'
  },
];

const activityList = [
  {
    avatar: './images/avatar/avatar-08.jpg',
    activity: 'activity what happen here',
    action: 'Follow'
  },
  {
    avatar: './images/avatar/avatar-07.jpg',
    activity: 'what happen here',
    action: 'Follow'
  },
  {
    avatar: './images/avatar/avatar-06.jpg',
    activity: 'activity here',
    action: 'Follow'
  },
]