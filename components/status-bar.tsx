export default function StatusBar() {
    return (
      <div className="flex justify-between items-center px-4 py-2 text-black text-sm">
        <div className="flex items-center gap-1">
          <div className="font-medium">Personal</div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="currentColor"/>
          </svg>
        </div>
        <div>11:10</div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 10H17V14H7V10Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  
  