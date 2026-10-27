// Instagram Story (9:16) Export Utility for Japan Travel Footprint
// Secret easter egg triggered by clicking "Travel Footprint" 11 times.
// Dynamically extracts real data from the Passions page and adapts to Light / Dark mode!

let toastTimer: ReturnType<typeof setTimeout> | null = null;

function showStoryToast(message: string, isDark: boolean, isError = false) {
  let toast = document.getElementById('secret-story-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'secret-story-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translate(-50%, 20px) scale(0.95);
      z-index: 99999;
      padding: 0.875rem 1.5rem;
      border-radius: 1rem;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: none;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.025em;
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;

  if (isError) {
    toast.style.backgroundColor = 'rgba(220, 38, 38, 0.95)';
    toast.style.borderColor = 'rgba(239, 68, 68, 0.5)';
    toast.style.color = '#FFFFFF';
  } else if (isDark) {
    toast.style.backgroundColor = 'rgba(22, 20, 19, 0.95)';
    toast.style.borderColor = 'rgba(235, 94, 40, 0.6)';
    toast.style.color = '#FFFFFF';
  } else {
    toast.style.backgroundColor = 'rgba(255, 252, 242, 0.96)';
    toast.style.borderColor = 'rgba(235, 94, 40, 0.6)';
    toast.style.color = '#252422';
  }

  toast.style.border = '1px solid';
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0) scale(1)';

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    if (toast) {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 20px) scale(0.95)';
    }
  }, 4000);
}

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radius: number,
  fill?: string | CanvasGradient,
  stroke?: string,
  lineWidth?: number
) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth || 1;
    ctx.stroke();
  }
  ctx.restore();
}

export async function exportInstagramStoryImage(): Promise<void> {
  const isDark = document.documentElement.classList.contains('dark');

  try {
    const modeLabel = isDark ? 'Dark Mode' : 'Light Mode';
    showStoryToast(`🎨 Secret unlocked! Crafting 9:16 Instagram Story (${modeLabel})...`, isDark);

    // 1. Locate the interactive SVG map in the DOM
    const mapSvg = document.getElementById('japan-interactive-map') as SVGSVGElement | null;
    if (!mapSvg) {
      showStoryToast('❌ Map element not found.', isDark, true);
      return;
    }

    // 2. Read REAL data from the DOM
    const tripsEl = document.getElementById('stat-trips-count');
    const tripsCount = tripsEl?.textContent?.trim() || '11';

    const visitedPrefGroups = document.querySelectorAll<SVGGElement>('#japan-interactive-map .prefecture-group[data-visited="true"]');
    const allPrefGroups = document.querySelectorAll<SVGGElement>('#japan-interactive-map .prefecture-group');
    const visitedCount = visitedPrefGroups.length || 31;
    const totalCount = allPrefGroups.length || 47;
    const coveragePct = Math.round((visitedCount / totalCount) * 100);

    // Extract REAL regional progress from .region-progress-row elements on the page
    const regionRows = document.querySelectorAll<HTMLElement>('.region-progress-row');
    const regions = Array.from(regionRows).map(row => {
      const nameEl = row.querySelector('span.font-semibold');
      const ratioEl = row.querySelector('span.font-mono');
      const rawName = nameEl?.textContent?.replace(/\s+/g, ' ').trim() || '';
      const rawRatio = ratioEl?.textContent?.replace(/\s+/g, ' ').trim() || '';
      const match = rawRatio.match(/(\d+)\s*\/\s*(\d+)/);
      const visited = match ? parseInt(match[1], 10) : 0;
      const total = match ? parseInt(match[2], 10) : 0;
      const pct = total > 0 ? Math.round((visited / total) * 100) : 0;
      return { name: rawName, visited, total, pct };
    });

    const visitedRegionsCount = regions.filter(r => r.visited > 0).length;
    const totalRegionsCount = regions.length || 8;

    // 3. Define Full Dynamic Theme Palette (Light Mode vs Dark Mode)
    const theme = isDark
      ? {
          // Tokyo Dark Theme
          bgStart: '#161413',
          bgMid1: '#1c1b18',
          bgMid2: '#141312',
          bgEnd: '#0c0b0a',
          aura: 'rgba(235, 94, 40, 0.12)',
          frameOuter: 'rgba(255, 255, 255, 0.08)',
          frameInner: 'rgba(235, 94, 40, 0.15)',
          cardBg: 'rgba(255, 255, 255, 0.035)',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          badgeBg: 'rgba(235, 94, 40, 0.15)',
          badgeBorder: 'rgba(235, 94, 40, 0.45)',
          badgeText: '#EB5E28',
          titleText: '#FAF6F0',
          subtitleText: '#A0AEC0',
          accent: '#EB5E28',
          statLabel: '#A0AEC0',
          divider: 'rgba(255, 255, 255, 0.07)',
          mapVisited: '#EB5E28',
          mapVisitedStroke: '#c44615',
          mapUnvisited: '#2d2b27',
          mapUnvisitedStroke: '#45413a',
          mapBoundary: 'rgba(160, 174, 192, 0.45)',
          legendVisitedText: '#FAF6F0',
          legendUnvisitedText: '#8A8A8A',
          insetBg: 'rgba(0, 0, 0, 0.55)',
          insetBorder: 'rgba(255, 255, 255, 0.1)',
          insetText: '#A0AEC0',
          regNameText: '#FAF6F0',
          regMutedText: '#666666',
          trackBg: 'rgba(255, 255, 255, 0.08)',
          footerWatermark: '#EB5E28',
          footerUrl: '#718096',
        }
      : {
          // Wabi Light Theme
          bgStart: '#FFFDF8',
          bgMid1: '#FAF5ED',
          bgMid2: '#F5EFE4',
          bgEnd: '#EDE5D6',
          aura: 'rgba(235, 94, 40, 0.08)',
          frameOuter: 'rgba(115, 109, 101, 0.22)',
          frameInner: 'rgba(235, 94, 40, 0.25)',
          cardBg: 'rgba(255, 255, 255, 0.92)',
          cardBorder: 'rgba(115, 109, 101, 0.16)',
          badgeBg: 'rgba(235, 94, 40, 0.12)',
          badgeBorder: 'rgba(235, 94, 40, 0.35)',
          badgeText: '#EB5E28',
          titleText: '#252422',
          subtitleText: '#736D65',
          accent: '#EB5E28',
          statLabel: '#736D65',
          divider: 'rgba(115, 109, 101, 0.12)',
          mapVisited: '#EB5E28',
          mapVisitedStroke: '#c44615',
          mapUnvisited: '#e8e1d5',
          mapUnvisitedStroke: '#dcd4c6',
          mapBoundary: 'rgba(115, 109, 101, 0.35)',
          legendVisitedText: '#252422',
          legendUnvisitedText: '#736D65',
          insetBg: 'rgba(255, 255, 255, 0.88)',
          insetBorder: 'rgba(115, 109, 101, 0.2)',
          insetText: '#736D65',
          regNameText: '#252422',
          regMutedText: '#9C958A',
          trackBg: 'rgba(115, 109, 101, 0.12)',
          footerWatermark: '#EB5E28',
          footerUrl: '#736D65',
        };

    // 4. Clone SVG and prepare for standalone rasterization in the active theme mode
    const clonedSvg = mapSvg.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clonedSvg.setAttribute('width', '1000');
    clonedSvg.setAttribute('height', '1000');
    clonedSvg.setAttribute('viewBox', '0 0 1000 1000');

    // Remove any interactive tooltips or active classes in clone
    clonedSvg.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));

    // Inject explicit styles matching current theme
    const styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    styleEl.textContent = `
      polygon, path { stroke-linejoin: round; }
      .prefecture-group.is-visited polygon, .prefecture-group.is-visited path { fill: ${theme.mapVisited} !important; stroke: ${theme.mapVisitedStroke} !important; stroke-width: 0.9px !important; }
      .prefecture-group.is-unvisited polygon, .prefecture-group.is-unvisited path { fill: ${theme.mapUnvisited} !important; stroke: ${theme.mapUnvisitedStroke} !important; stroke-width: 0.8px !important; }
      .boundary-line line { stroke: ${theme.mapBoundary} !important; stroke-width: 2px !important; stroke-dasharray: 4,4 !important; }
    `;
    clonedSvg.insertBefore(styleEl, clonedSvg.firstChild);

    clonedSvg.querySelectorAll<SVGGElement>('.prefecture-group').forEach(group => {
      const isVisited = group.getAttribute('data-visited') === 'true';
      const fill = isVisited ? theme.mapVisited : theme.mapUnvisited;
      const stroke = isVisited ? theme.mapVisitedStroke : theme.mapUnvisitedStroke;
      group.querySelectorAll('polygon, path').forEach(shape => {
        shape.setAttribute('fill', fill);
        shape.setAttribute('stroke', stroke);
        shape.setAttribute('stroke-width', '0.9');
        shape.setAttribute('stroke-linejoin', 'round');
      });
    });

    // 5. Convert SVG to Image via Data URL
    const svgXml = new XMLSerializer().serializeToString(clonedSvg);
    const svgBase64 = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgXml);

    const mapImage = new Image();
    await new Promise<void>((resolve, reject) => {
      mapImage.onload = () => resolve();
      mapImage.onerror = () => reject(new Error('Failed to load map SVG'));
      mapImage.src = svgBase64;
    });

    // 6. Initialize 9:16 Canvas (1080 x 1920)
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2d context');

    // Background Gradient (Dynamic Light / Dark)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 1920);
    bgGrad.addColorStop(0, theme.bgStart);
    bgGrad.addColorStop(0.3, theme.bgMid1);
    bgGrad.addColorStop(0.7, theme.bgMid2);
    bgGrad.addColorStop(1, theme.bgEnd);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Subtle Japanese Craft Ambient Aura / Radial Glow
    const aura = ctx.createRadialGradient(540, 960, 50, 540, 960, 650);
    aura.addColorStop(0, theme.aura);
    aura.addColorStop(0.6, isDark ? 'rgba(235, 94, 40, 0.03)' : 'rgba(235, 94, 40, 0.02)');
    aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = aura;
    ctx.fillRect(0, 0, 1080, 1920);

    // Double Border Inset Frame (Instagram safe-zone margins)
    drawRoundRect(ctx, 48, 48, 984, 1824, 44, undefined, theme.frameOuter, 1.5);
    drawRoundRect(ctx, 56, 56, 968, 1808, 38, undefined, theme.frameInner, 1);

    // Top Badge Pill (y: 110)
    const badgeText = '🗾  JAPAN TRAVEL FOOTPRINT  •  日本旅行';
    ctx.font = 'bold 18px "Quicksand", system-ui, sans-serif';
    const badgeWidth = ctx.measureText(badgeText).width + 48;
    const badgeX = (1080 - badgeWidth) / 2;
    drawRoundRect(ctx, badgeX, 105, badgeWidth, 42, 21, theme.badgeBg, theme.badgeBorder, 1.2);
    ctx.fillStyle = theme.badgeText;
    ctx.textAlign = 'center';
    ctx.fillText(badgeText, 540, 132);

    // Title & Subtitle
    ctx.textAlign = 'center';
    ctx.font = 'bold 58px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.titleText;
    ctx.fillText('Travel Footprint', 540, 205);

    ctx.font = '500 23px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.subtitleText;
    ctx.fillText(`${visitedCount} of ${totalCount} Prefectures Explored Across Japan`, 540, 248);

    // Highlight Stats Cards Trio (y: 285, height: 125)
    const cardW = 296;
    const cardH = 125;
    const cardY = 285;
    const startX = 72;
    const gap = 24;

    // Card 1: Prefectures
    drawRoundRect(ctx, startX, cardY, cardW, cardH, 24, theme.cardBg, theme.cardBorder, 1);
    ctx.fillStyle = theme.accent;
    ctx.font = 'bold 40px "Quicksand", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${visitedCount} / ${totalCount}`, startX + cardW / 2, cardY + 54);
    ctx.fillStyle = theme.statLabel;
    ctx.font = '600 16px "Quicksand", system-ui, sans-serif';
    ctx.fillText('PREFECTURES', startX + cardW / 2, cardY + 92);

    // Card 2: Coverage
    const card2X = startX + cardW + gap;
    drawRoundRect(ctx, card2X, cardY, cardW, cardH, 24, theme.cardBg, theme.cardBorder, 1);
    ctx.fillStyle = theme.accent;
    ctx.font = 'bold 40px "Quicksand", system-ui, sans-serif';
    ctx.fillText(`${coveragePct}%`, card2X + cardW / 2, cardY + 54);
    ctx.fillStyle = theme.statLabel;
    ctx.font = '600 16px "Quicksand", system-ui, sans-serif';
    ctx.fillText('TOTAL COVERAGE', card2X + cardW / 2, cardY + 92);

    // Card 3: Journeys (from real DOM)
    const card3X = card2X + cardW + gap;
    drawRoundRect(ctx, card3X, cardY, cardW, cardH, 24, theme.cardBg, theme.cardBorder, 1);
    ctx.fillStyle = theme.accent;
    ctx.font = 'bold 40px "Quicksand", system-ui, sans-serif';
    ctx.fillText(tripsCount, card3X + cardW / 2, cardY + 54);
    ctx.fillStyle = theme.statLabel;
    ctx.font = '600 16px "Quicksand", system-ui, sans-serif';
    ctx.fillText('TRIPS TO JAPAN', card3X + cardW / 2, cardY + 92);

    // Main Map Container Box (y: 440, height: 980)
    const mapBoxX = 72;
    const mapBoxY = 440;
    const mapBoxW = 936;
    const mapBoxH = 980;
    drawRoundRect(ctx, mapBoxX, mapBoxY, mapBoxW, mapBoxH, 32, theme.cardBg, theme.cardBorder, 1);

    // Map Legend Bar inside Map Box
    ctx.textAlign = 'left';
    drawRoundRect(ctx, 105, 474, 18, 18, 5, theme.mapVisited, theme.mapVisitedStroke, 1);
    ctx.font = 'bold 18px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.legendVisitedText;
    ctx.fillText(`Visited (${visitedCount})`, 135, 490);

    drawRoundRect(ctx, 280, 474, 18, 18, 5, theme.mapUnvisited, theme.mapUnvisitedStroke, 1);
    ctx.font = '500 18px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.legendUnvisitedText;
    ctx.fillText(`Not Visited (${totalCount - visitedCount})`, 310, 490);

    // Map Box Header Divider line
    ctx.strokeStyle = theme.divider;
    ctx.beginPath();
    ctx.moveTo(105, 510);
    ctx.lineTo(975, 510);
    ctx.stroke();

    // Okinawa Inset Tag
    drawRoundRect(ctx, 105, 530, 160, 32, 8, theme.insetBg, theme.insetBorder, 1);
    ctx.textAlign = 'left';
    ctx.fillStyle = theme.insetText;
    ctx.font = '600 14px "Quicksand", system-ui, sans-serif';
    ctx.fillText('沖縄 / Okinawa (Inset)', 118, 551);

    // Render SVG Map onto Canvas
    ctx.drawImage(mapImage, 90, 520, 900, 880);

    // Regional Breakdown Card (y: 1445, height: 285)
    const regBoxX = 72;
    const regBoxY = 1445;
    const regBoxW = 936;
    const regBoxH = 285;
    drawRoundRect(ctx, regBoxX, regBoxY, regBoxW, regBoxH, 28, theme.cardBg, theme.cardBorder, 1);

    ctx.textAlign = 'left';
    ctx.font = 'bold 18px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.accent;
    ctx.fillText('REGIONAL PROGRESS', 105, 1485);

    ctx.textAlign = 'right';
    ctx.font = '600 16px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.statLabel;
    ctx.fillText(`${visitedRegionsCount} OF ${totalRegionsCount} REGIONS VISITED`, 975, 1485);

    ctx.strokeStyle = theme.divider;
    ctx.beginPath();
    ctx.moveTo(105, 1502);
    ctx.lineTo(975, 1502);
    ctx.stroke();

    // Render REAL regions extracted from the passions page (in 2 columns of 4)
    const col1X = 105;
    const col2X = 545;
    const colW = 430;

    regions.forEach((r, idx) => {
      const isCol2 = idx >= 4;
      const colX = isCol2 ? col2X : col1X;
      const rowIdx = idx % 4;
      const rowY = 1530 + rowIdx * 45;

      ctx.textAlign = 'left';
      ctx.font = '600 15px "Quicksand", system-ui, sans-serif';
      ctx.fillStyle = theme.regNameText;
      ctx.fillText(r.name, colX, rowY);

      ctx.textAlign = 'right';
      ctx.font = '500 14px "Quicksand", monospace, sans-serif';
      ctx.fillStyle = r.pct > 0 ? theme.accent : theme.regMutedText;
      ctx.fillText(`${r.visited}/${r.total} (${r.pct}%)`, colX + colW, rowY);

      const barY = rowY + 6;
      drawRoundRect(ctx, colX, barY, colW, 6, 3, theme.trackBg);
      if (r.pct > 0) {
        const fillW = Math.max(8, (colW * r.pct) / 100);
        drawRoundRect(ctx, colX, barY, fillW, 6, 3, theme.accent);
      }
    });

    // Bottom Footer Bar (y: 1775 - 1825)
    ctx.textAlign = 'center';
    ctx.font = 'bold 20px "Quicksand", system-ui, sans-serif';
    ctx.fillStyle = theme.footerWatermark;
    ctx.fillText('📸  Mark no Nihon Tabi  •  マークの日本旅', 540, 1785);

    // 7. Trigger download of 9:16 Instagram Story PNG
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    const filenameTheme = isDark ? 'dark' : 'light';
    a.download = `japan-travel-footprint-story-${filenameTheme}-9x16.png`;
    a.href = dataUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    showStoryToast(`📸 Instagram Story (${modeLabel} 9:16) saved to Downloads!`, isDark);
  } catch (err) {
    console.error('Error generating story image:', err);
    showStoryToast('❌ Failed to export story image. Please try again.', isDark, true);
  }
}

// Secret click counter listener for "Travel Footprint" text
export function initSecretFootprintTrigger(): void {
  const title = document.getElementById('travel-footprint-title');
  if (!title) return;

  let clickCount = 0;
  let lastClickTime = 0;

  title.addEventListener('click', () => {
    const now = Date.now();
    // Reset if more than 3.5s elapsed between clicks
    if (now - lastClickTime > 3500) {
      clickCount = 0;
    }
    lastClickTime = now;
    clickCount++;

    // Secret trigger activated on 11th click!
    if (clickCount >= 11) {
      clickCount = 0;
      exportInstagramStoryImage();
    }
  });
}
