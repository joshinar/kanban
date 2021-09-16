import React, { useEffect, useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [membersList, setMembersList] = useState(null);
  const [issues, setIssues] = useState(null);
  const [states] = useState(['Planned', 'Started', 'Done']);
  const fetchMembers = () => {
    const membersData = JSON.parse(localStorage.getItem('members')) || [];
    setMembersList(membersData);
  };
  const fetchIssues = () => {
    const issuesData = JSON.parse(localStorage.getItem('issues')) || [];
    setIssues(issuesData);
  };
  useEffect(() => {
    fetchMembers();
    fetchIssues();
  }, []);

  return (
    <AppContext.Provider
      value={{ membersList, fetchMembers, states, issues, fetchIssues }}
    >
      {children}
    </AppContext.Provider>
  );
};
