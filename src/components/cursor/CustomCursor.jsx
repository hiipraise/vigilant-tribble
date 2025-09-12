import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const updateCursorPosition = () => {
      if (!dotRef.current || !followerRef.current) return;

      const lerp = (start, end, factor) => start + (end - start) * factor;

      // Update dot position (fast)
      dotRef.current.style.transform = `translate3d(${mouseRef.current.x - 2}px, ${mouseRef.current.y - 2}px, 0)`;

      // Update follower position (slow)
      const followerX = parseFloat(followerRef.current.style.transform.split('(')[1]) || 0;
      const followerY = parseFloat(followerRef.current.style.transform.split(',')[1]) || 0;
      
      const newFollowerX = lerp(followerX, mouseRef.current.x - 15, 0.2); // Half of follower width
      const newFollowerY = lerp(followerY, mouseRef.current.y - 15, 0.2);

      followerRef.current.style.transform = `translate3d(${newFollowerX}px, ${newFollowerY}px, 0)`;

      animationFrameRef.current = requestAnimationFrame(updateCursorPosition);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrameRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default CustomCursor;