import React from 'react'
import { Card, CardContent } from "../../../components/components/ui/card"
import { Button } from "../../../components/components/ui/button"
import { Eye, Users, User } from 'lucide-react'
import { Avatar, AvatarFallback } from "../../../components/components/ui/avatar"


export function TeamCard({ team, onClick }) {
    const initials = team.team_name.split(' ').map(word => word[0]).join('').toUpperCase()
  
    return (
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 mb-5 md:mb-0">
        <div className="bg-gradient-to-r from-violet-800 to-violet-950 p-4">
          <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
            <AvatarFallback className="text-2xl font-bold bg-violet-400 text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-violet-900">{team.team_name}</h3>
          <p className="text-sm text-gray-500 mb-4">PS ID: {team.ps_id}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm">
              <User className="mr-2 h-4 w-4 text-violet-500" />
              <span className="font-medium">Leader:</span>
              <span className="ml-2 text-gray-600">{team.leader_name}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="mr-2 h-4 w-4 text-violet-500" />
              <span className="font-medium">Participants:</span>
              <span className="ml-2 text-gray-600">{team.number_of_participants}</span>
            </div>
          </div>
          <Button onClick={onClick} className="w-full bg-violet-600 hover:bg-violet-700">
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </CardContent>
      </Card>
    )
  }
  