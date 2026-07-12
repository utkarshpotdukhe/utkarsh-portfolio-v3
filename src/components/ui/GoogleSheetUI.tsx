'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Table, Search, Filter, Share2, MoreHorizontal, CheckCircle2, Clock, FileEdit } from 'lucide-react';

interface SheetUIProps {
  sheetUrl?: string;
}

export function GoogleSheetUI({ sheetUrl }: SheetUIProps) {
  const rows = [
    { title: 'The Future of AI Automation in 2026', content: 'Why most businesses are still using 20th century spreadsheets...', status: 'Published', date: 'Mar 28, 2026' },
    { title: 'Choosing n8n vs Zapier for Enterprise', content: 'The hidden cost of low-code at scale that nobody tells you...', status: 'Published', date: 'Mar 25, 2026' },
    { title: 'Building Voice Agents with Vapi & 11Labs', content: 'Top 5 mistakes when deploying real-time voice synthesis agents...', status: 'Completed', date: 'Mar 22, 2026' },
    { title: 'Mastering LinkedIn Hooks for Developers', content: 'Stop writing boring technical posts. Use these 3 storytelling...', status: 'Draft', date: 'Mar 20, 2026' },
    { title: 'Automating 10,000 Amazon Listings', content: 'How we cut 80% manual labor and increased PPC conversion by...', status: 'Completed', date: 'Mar 18, 2026' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Published': return <CheckCircle2 size={13} className="text-success" />;
      case 'Completed': return <Clock size={13} className="text-secondary" />;
      case 'Draft': return <FileEdit size={13} className="text-muted" />;
      default: return null;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-success/10 text-success';
      case 'Completed': return 'bg-secondary/10 text-secondary';
      case 'Draft': return 'bg-surface text-muted';
      default: return 'bg-surface text-muted';
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-[400px] bg-white border border-border rounded-xl overflow-hidden shadow-xl font-sans">
      {/* Header / Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-success/15 border border-success/30 flex items-center justify-center">
            <Table size={16} className="text-success" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-text tracking-tight leading-none mb-1">LinkedIn Content Database</span>
            <span className="text-[9px] text-muted leading-none font-mono tracking-widest">UTKARSH_SYSTEM_V.1.0</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
            <div className="relative">
                <Search size={12} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted/60" />
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="pl-7 pr-3 py-1.5 bg-white border border-border rounded-md text-[10px] text-text focus:outline-none focus:border-primary/60 w-32 md:w-48 transition-all"
                />
            </div>
            <button className="p-1.5 text-muted hover:text-text hover:bg-black/[0.04] rounded-md transition-all">
                <Filter size={14} />
            </button>
            <button className="p-1.5 text-muted hover:text-text hover:bg-black/[0.04] rounded-md transition-all">
                <Share2 size={14} />
            </button>
        </div>
      </div>

      {/* Spreadsheet Main Area */}
      <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="bg-surface text-[10px] font-mono text-muted uppercase tracking-[0.1em] border-b border-border">
            <tr>
              <th className="px-5 py-2.5 font-bold border-r border-border w-10 text-center">#</th>
              <th className="px-5 py-2.5 font-bold border-r border-border">Title / Topic Idea</th>
              <th className="px-5 py-2.5 font-bold border-r border-border">AI Generated Content</th>
              <th className="px-5 py-2.5 font-bold border-r border-border">Workflow Status</th>
              <th className="px-5 py-2.5 font-bold">Date Created</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="group border-b border-border hover:bg-surface transition-colors"
              >
                <td className="px-5 py-3 text-[10px] font-mono text-muted/60 text-center border-r border-border">{i + 1}</td>
                <td className="px-5 py-3 text-[11px] font-bold text-text border-r border-border truncate max-w-[200px] group-hover:text-secondary transition-colors">
                  {row.title}
                </td>
                <td className="px-5 py-3 text-[10px] text-muted border-r border-border truncate max-w-[250px]">
                  {row.content}
                </td>
                <td className="px-5 py-3 border-r border-border">
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${getStatusStyle(row.status)}`}>
                    {getStatusIcon(row.status)}
                    {row.status}
                  </div>
                </td>
                <td className="px-5 py-3 text-[10px] font-mono text-muted/70 flex items-center justify-between">
                  {row.date}
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal size={14} className="text-muted" />
                  </button>
                </td>
              </motion.tr>
            ))}
            {/* Empty Rows emulation */}
            {[...Array(5)].map((_, i) => (
                <tr key={`empty-${i}`} className="border-b border-border/50 opacity-40">
                    <td className="px-5 py-3 border-r border-border/50"></td>
                    <td className="px-5 py-3 border-r border-border/50"></td>
                    <td className="px-5 py-3 border-r border-border/50"></td>
                    <td className="px-5 py-3 border-r border-border/50"></td>
                    <td className="px-5 py-3"></td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Status Bar */}
      <div className="px-5 py-2 border-t border-border bg-surface flex items-center justify-between">
         <div className="flex items-center gap-4 text-[9px] font-mono tracking-widest text-muted">
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-success"/> DB_STATUS: ONLINE</span>
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-secondary animate-pulse"/> SYNCING (n8n)...</span>
         </div>
         <div className="text-[9px] font-mono tracking-widest text-muted uppercase">
            Rows: 7 / 500
         </div>
      </div>
    </div>
  );
}
