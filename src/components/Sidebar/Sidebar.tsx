import type React from "react";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";
import { menu, type MenuItem } from "../../type/side.js";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onClose);
  const [expand, setExpand] = useState<string | null>(null);
  if (!isOpen) return null;

  const toggle = (id: string) => {
    setExpand((prev) => (prev === id ? null : id));
  };
  
  const renderMenu = (items: MenuItem[]) => (
    <ul className="sidebar-list">
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = expand === item.id;

        return (
          <li key={item.id} className="menu-item">
            <div
              className={`menu-header ${hasChildren ? "has-children" : ""}`}
              onClick={() => (hasChildren ? toggle(item.id) : onClose())}
            >
              {item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
              {hasChildren && (
                <span className={`arrow ${isOpen ? "open" : ""}`}>▶</span>
              )}
            </div>

            {hasChildren && isOpen && (
              <ul className="submenu">
                {item.children!.map((child) => (
                  <li key={child.id}>
                    <a href={child.href}>{child.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`} ref={modalRef}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        {renderMenu(menu)}
      </aside>
    </>
  );
};
