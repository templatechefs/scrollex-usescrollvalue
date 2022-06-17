import { Rect } from '../types';
interface UseParallaxLayoutManagerParams {
    scrollAxis: 'x' | 'y';
}
export interface Layout {
    sections: Record<string, Rect>;
    container: Rect;
    scrollMax: number;
}
export interface LayoutManager {
    layout: Layout;
    setContainerRect: (rect: Rect) => void;
    setSectionRect: (sectionId: string, rect: Rect) => void;
}
declare const useParallaxLayoutManager: ({ scrollAxis, }: UseParallaxLayoutManagerParams) => LayoutManager;
export default useParallaxLayoutManager;
