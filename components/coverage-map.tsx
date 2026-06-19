export function CoverageMap() {
  return (
    <svg
      viewBox="0 0 640 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FleetFix Southern Ontario service area, Barrie to Niagara, London to Belleville"
      className="h-auto w-full"
    >
      <text
        x="206"
        y="64"
        fontFamily="var(--font-heading)"
        fontSize="15"
        letterSpacing="3"
        fill="#3A464F"
      >
        GEORGIAN BAY
      </text>
      <text
        x="22"
        y="232"
        fontFamily="var(--font-heading)"
        fontSize="15"
        letterSpacing="3"
        fill="#3A464F"
        transform="rotate(-90 22 232)"
      >
        LAKE HURON
      </text>
      <text
        x="150"
        y="506"
        fontFamily="var(--font-heading)"
        fontSize="15"
        letterSpacing="3"
        fill="#3A464F"
      >
        LAKE ERIE
      </text>
      <text
        x="452"
        y="356"
        fontFamily="var(--font-heading)"
        fontSize="15"
        letterSpacing="3"
        fill="#3A464F"
      >
        LAKE ONTARIO
      </text>
      <path
        d="M62,150 L150,98 L250,118 L300,80 L402,112 L470,168 L545,236 L498,286 L430,300 L360,316 L344,362 L382,418 L320,432 L200,440 L110,420 L60,372 L55,268 Z"
        fill="#222A31"
        stroke="#323C44"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M166,352 L300,150 L495,256 C455,300 400,312 365,318 C345,345 342,380 372,406 Z"
        fill="rgba(255,180,0,.15)"
        stroke="#FFB400"
        strokeWidth="2.2"
        strokeDasharray="7 5"
        strokeLinejoin="round"
      />
      <g stroke="#FFB400" strokeWidth="2" opacity=".55" strokeLinecap="round">
        <line x1="335" y1="302" x2="300" y2="150" />
        <line x1="335" y1="302" x2="166" y2="352" />
        <line x1="335" y1="302" x2="495" y2="256" />
        <line x1="335" y1="302" x2="372" y2="406" />
      </g>
      <g
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="600"
        textAnchor="middle"
      >
        <g>
          <rect x="304" y="218" width="30" height="19" rx="4" fill="#F4F3EF" />
          <text x="319" y="231" fill="#15191D">
            400
          </text>
        </g>
        <g>
          <rect x="236" y="320" width="30" height="19" rx="4" fill="#F4F3EF" />
          <text x="251" y="333" fill="#15191D">
            401
          </text>
        </g>
        <g>
          <rect x="402" y="270" width="30" height="19" rx="4" fill="#F4F3EF" />
          <text x="417" y="283" fill="#15191D">
            401
          </text>
        </g>
        <g>
          <rect x="340" y="350" width="36" height="19" rx="4" fill="#1C3A6E" />
          <text x="358" y="363" fill="#FFB400">
            QEW
          </text>
        </g>
      </g>
      <g
        fontFamily="var(--font-heading)"
        fontSize="16"
        fontWeight="600"
        fill="#C4CBD1"
        letterSpacing=".5"
      >
        <circle cx="300" cy="150" r="5" fill="#F4F3EF" />
        <text x="300" y="140" textAnchor="middle">
          BARRIE
        </text>
        <circle cx="166" cy="352" r="5" fill="#F4F3EF" />
        <text x="160" y="372" textAnchor="middle">
          LONDON
        </text>
        <circle cx="495" cy="256" r="5" fill="#F4F3EF" />
        <text x="495" y="246" textAnchor="middle">
          BELLEVILLE
        </text>
        <circle cx="372" cy="406" r="5" fill="#F4F3EF" />
        <text x="372" y="426" textAnchor="middle">
          NIAGARA FALLS
        </text>
      </g>
      <circle
        cx="335"
        cy="302"
        r="13"
        fill="none"
        stroke="#FFB400"
        strokeWidth="2"
        opacity=".5"
      />
      <circle cx="335" cy="302" r="7" fill="#FFB400" />
      <text
        x="335"
        y="290"
        textAnchor="middle"
        fontFamily="var(--font-heading)"
        fontSize="17"
        fontWeight="700"
        fill="#FFB400"
      >
        MISSISSAUGA
      </text>
      <text
        x="335"
        y="333"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="2"
        fill="#FFB400"
      >
        HQ · DISPATCH
      </text>
      <g transform="translate(28,28)">
        <rect
          x="0"
          y="0"
          width="16"
          height="16"
          rx="3"
          fill="rgba(255,180,0,.15)"
          stroke="#FFB400"
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
        <text x="24" y="13" fontFamily="var(--font-mono)" fontSize="11" fill="#9BA4AC">
          FleetFix coverage area
        </text>
        <circle cx="8" cy="34" r="6" fill="#FFB400" />
        <text x="24" y="38" fontFamily="var(--font-mono)" fontSize="11" fill="#9BA4AC">
          Shop &amp; dispatch HQ
        </text>
      </g>
    </svg>
  )
}
